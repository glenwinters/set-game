import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// TODO: Make the root full screen so the background-color is everywhere and
// then center the Set board
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: "#e9e9e9"
    }
  })
);

// TODO: Move SetCard to its own file and give it props
const SetCard: React.FC = () => {
 return (
  <Card>
    <CardContent>
      <Typography align="center">~ ~ ~</Typography>
    </CardContent>
  </Card>
 );
}

// TODO: How will we map an array of things to this grid since the 12 items are
// broken up by Grid containers?
const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <SetCard />
        </Grid>
        <Grid item xs>
          <SetCard />
        </Grid>
        <Grid item xs>
          <SetCard />
        </Grid>
        <Grid item xs>
          <SetCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <SetCard />
        </Grid>
        <Grid item xs>
          <SetCard />
        </Grid>
        <Grid item xs>
          <SetCard />
        </Grid>
        <Grid item xs>
          <SetCard />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <SetCard />
        </Grid>
        <Grid item xs>
          <SetCard />
        </Grid>
        <Grid item xs>
          <SetCard />
        </Grid>
        <Grid item xs>
          <SetCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
