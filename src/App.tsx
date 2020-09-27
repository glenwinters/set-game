import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// TODO: Center the Set board
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    }
  })
);

// TODO: Move SetCard to its own file and give it props
const SetCard: React.FC = () => {
 return (
  <Card>
    <CardContent>
      <svg width="300" height="100">
        <ellipse cx={50} cy={50} rx={25} ry={50} fill="purple" />
        <ellipse cx={150} cy={50} rx={25} ry={50} fill="purple" />
        <ellipse cx={250} cy={50} rx={25} ry={50} fill="purple" />
      </svg>
    </CardContent>
  </Card>
 );
}

// TODO: How will we map an array of things to this grid since the 12 items are
// broken up by Grid containers?
const App: React.FC = () => {
  // Source: https://material-ui.com/customization/palette/#user-preference
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersDarkMode = false;
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
      </ThemeProvider>
  );
};

export default App;
