import React from 'react';
import { Card, CardContent, Typography, Grid, Paper, makeStyles } from '@material-ui/core';
import './Welcome.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const WelcomeView: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
    <Grid item xs={4}>
      <Typography className="card">12</Typography>
    

    </Grid>
    <Grid item xs={4}>
    <Typography>4</Typography>
    </Grid>
    <Grid item xs={4}>
    <Typography>4</Typography>
    </Grid>
    <Grid item xs={8}>
    <Typography>8</Typography>
    </Grid>
  </Grid>
  );
};

export default WelcomeView;
