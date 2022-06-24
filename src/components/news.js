// import { Search } from '@mui/icons-material';
import { Container, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NewsCard from './card';

function News(props) {
    const articles = props?.data?.headlines?.articles;
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {articles?.map((article, i) => (
                <Grid item xs={4}>
                    <NewsCard {...article} key={i} />
                </Grid>
            ))}
        </Grid>
    );

}



function mapStateToProps(state) {
    return { data: state.headlines };
}

export default connect(mapStateToProps, actions)(News);
