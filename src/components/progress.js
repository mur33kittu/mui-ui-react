import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { Check } from '@mui/icons-material';
import { Button, CircularProgress } from '@mui/material';

const styles = theme => ({
  button: {
    margin: 10
  },
});

const LoadingButton = (props) => {
    console.log(props);
  const { classes, loading, done, ...other } = props;

  if (done) {
    return (
      <Button className={classes.button} {...other} disabled>
        <Check />
      </Button>
    );
  }
  else if (loading) {
    return (
      <Button className={classes.button} {...other}>
        <CircularProgress />
      </Button>
    );
  } else {
    return (
      <Button className={classes.button} {...other} />
    );
  }
}

LoadingButton.defaultProps = {
  loading: false,
  done: false,
  };

LoadingButton.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  done: PropTypes.bool,
};

export default withStyles(styles)(LoadingButton);