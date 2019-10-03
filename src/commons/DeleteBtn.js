import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: 250,
    height: 35,
    borderRadius: 20,
    border: 0,
    color: '#ffffff',
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 0.61,
    letterSpacing: 'normal',
    textTransform: 'none',
    backgroundColor: '#ff6169',
    "&:hover":{
      backgroundColor: '#ffc0c3',
    },
    "&:disabled":{
      color: "#ffffff",
      opacity: 0.4,
    }
  },
};

function DeleteBtn(props) {
  const {
    classes,
    label,
    handleClick,
    disabled
  } = props;
  return (
  <Button
    className={classes.root}
    onClick={handleClick}
    fullWidth='true'
    disabled={disabled}>
    {label}
  </Button>);
}

DeleteBtn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteBtn);