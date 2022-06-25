import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as s3deploy from "@aws-cdk/aws-s3-deployment";
import * as cloudFront from "@aws-cdk/aws-cloudfront";
import { join } from "path";

export class InfrastructureStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Add S3 Bucket
        const s3Site = new s3.Bucket(this, `mui-ui-react`, {
            bucketName: `mui-ui-react-s3bucket`,
            publicReadAccess: true,
            websiteIndexDocument: "index.html",
            websiteErrorDocument: "index.html"
        });
        this.enableCorsOnBucket(s3Site);

        // Create a new CloudFront Distribution
        const distribution = new cloudFront.CloudFrontWebDistribution(
            this,
            `mui-ui-react-cf-distribution`,
            {
                originConfigs: [
                    {
                        s3OriginSource: {
                            s3BucketSource: s3Site
                        },
                        behaviors: [
                            {
                                isDefaultBehavior: true,
                                compress: true,
                                allowedMethods: cloudFront.CloudFrontAllowedMethods.ALL,
                                cachedMethods:
                                    cloudFront.CloudFrontAllowedCachedMethods.GET_HEAD_OPTIONS,
                                forwardedValues: {
                                    queryString: true,
                                    cookies: {
                                        forward: "none"
                                    },
                                    headers: [
                                        "Access-Control-Request-Headers",
                                        "Access-Control-Request-Method",
                                        "Origin"
                                    ]
                                }
                            }
                        ]
                    }
                ],
                comment: `mui-ui-react - CloudFront Distribution`,
                viewerProtocolPolicy: cloudFront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
            }
        );

        // Setup Bucket Deployment to automatically deploy new assets and invalidate cache
        new s3deploy.BucketDeployment(this, `mui-ui-react-s3bucketdeployment`, {
            sources: [s3deploy.Source.asset(join(__dirname, "../build"))],
            destinationBucket: s3Site,
            distribution: distribution,
            distributionPaths: ["/*"]
        });

        // Final CloudFront URL
        new cdk.CfnOutput(this, "CloudFront URL", {
            value: distribution.domainName
        });
    }

    /**
     * Enables CORS access on the given bucket
     *
     * @memberof CxpInfrastructureStack
     */
    enableCorsOnBucket = (bucket: s3.IBucket) => {
        const cfnBucket = bucket.node.findChild("Resource") as s3.CfnBucket;
        cfnBucket.addPropertyOverride("CorsConfiguration", {
            CorsRules: [
                {
                    AllowedOrigins: ["*"],
                    AllowedMethods: ["HEAD", "GET", "PUT", "POST", "DELETE"],
                    ExposedHeaders: [
                        "x-amz-server-side-encryption",
                        "x-amz-request-id",
                        "x-amz-id-2"
                    ],
                    AllowedHeaders: ["*"]
                }
            ]
        });
    };
}