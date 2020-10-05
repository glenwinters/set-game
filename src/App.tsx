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
    },
    card: {
      width: 200 + 32,
    },
    remainingDeck: {
      width: 200 + 32,
      backgroundColor: "#aaaaaa",
      color: "white"
    },
    scorePile: {
      width: 200 + 32,
      height: 145,
      fontSize: "5em",
      textAlign: 'center',
      backgroundColor: "#aaaaaa",
      color: "white",
      WebkitTextStrokeWidth: "2px",
      WebkitTextStrokeColor: "#555555"
    },
  })
);

// TODO: Refactor these by pulling out the random selection logic into
// randomItem that picks from a list. However, this is just for messing around
// so it doesn't really matter
const randomColor = () => {
  const colors = ['green', 'red', 'purple'] as const;
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const randomShape = () => {
  const shapes = ['oval', 'diamond', 'squiggle'] as const;
  const randomIndex = Math.floor(Math.random() * shapes.length);
  return shapes[randomIndex];
};

const randomNumber = () => {
  const numbers = [1, 2, 3] as const;
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
};

const randomShading = () => {
  const shadings = [1, 2, 3] as const;
  const randomIndex = Math.floor(Math.random() * shadings.length);
  return shadings[randomIndex];
};

interface SetCardProps {
  color?: 'green' | 'red' | 'purple';
  shape?: 'oval' | 'diamond' | 'squiggle';
  number?: 1 | 2 | 3;
  shading?: 'fill' | 'outline' | 'striped';
}

// TODO: Move SetCard to its own file and give it props
const SetCard: React.FC<SetCardProps> = ({
  color = randomColor(),
  shape = randomShape(),
  number = randomNumber(),
  shading = randomShading(),
}) => {
  const classes = useStyles();
  // TODO: Refactor this to not duplicate the shapes
  // TODO: Change the 2 to be centered
  // TODO: Add shading https://stackoverflow.com/questions/13069446/simple-fill-pattern-in-svg-diagonal-hatching
  const shapes = {
    oval: (
      <svg width="200" height="100">
        {number > 1 ? (
          <ellipse cx={25} cy={50} rx={25} ry={50} fill={color} />
        ) : null}
        {number !== 2 ? (
          <ellipse cx={100} cy={50} rx={25} ry={50} fill={color} />
        ) : null}
        {number > 1 ? (
          <ellipse cx={175} cy={50} rx={25} ry={50} fill={color} />
        ) : null}
      </svg>
    ),
    diamond: (
      <svg width="200" height="100">
        {number > 1 ? (
          <polygon points="25,0 50,50 25,100 0,50" fill={color} />
        ) : null}
        {number !== 2 ? (
          <polygon points="100,0 125,50 100,100 75,50" fill={color} />
        ) : null}
        {number > 1 ? (
          <polygon points="175,0 200,50 175,100 150,50" fill={color} />
        ) : null}
      </svg>
    ),
    squiggle: (
      <svg width="200" height="100">
        <defs>
          <path
            id="squiggle"
            d="m8.38729,1.46539c-5.80734,1.9723 -8.82058,5.75255 -8.16315,10.13545c0.21914,1.31487 1.42444,3.99939 2.73931,6.13606c5.64298,9.09451 6.90306,12.43647 6.90306,18.40817c0,4.32811 -0.82179,7.34135 -4.10897,15.77843c-4.05418,10.3546 -5.42384,18.6821 -4.16375,25.4756c2.41059,12.98434 14.40878,21.80492 29.63935,21.80492c8.82058,0 15.72365,-3.23239 17.86031,-8.32751c1.47923,-3.5611 1.04094,-6.51956 -1.75316,-11.01203c-3.45153,-5.5882 -5.04033,-9.31366 -6.02648,-13.86092c-0.87658,-4.3829 -0.43829,-7.99879 1.53401,-12.38169c3.06803,-6.79349 4.27333,-12.54605 4.27333,-20.21612c-0.05479,-8.43708 -1.42444,-13.47741 -5.25948,-19.28475c-3.83504,-5.91691 -11.1216,-10.90246 -18.6821,-12.87476c-4.27333,-1.09572 -11.23118,-1.04094 -14.79228,0.21914z"
          />
        </defs>
        {number > 1 ? <use href="#squiggle" fill={color} /> : null}
        {number !== 2 ? <use href="#squiggle" x="75" fill={color} /> : null}
        {number > 1 ? <use href="#squiggle" x="150" fill={color} /> : null}
      </svg>
    ),
  };
  return (
    <Card className={classes.card}>
      <CardContent>{shapes[shape]}</CardContent>
    </Card>
  );
};

const RemainingDeck: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.remainingDeck}>
      <CardContent>
        <svg width="200" height="100">
          <polyline points="10,90 10,10 190,90 190,10" stroke="black" strokeWidth="6px" fill="none" />
        </svg>
      </CardContent>
    </Card>
  );
};

const ScorePile: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.scorePile}>
      <CardContent>{81 - 12}</CardContent>
    </Card>
  );
};

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

  const justify = 'center';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={5} justify={justify}>
          <Grid item xs={2}>
            <SetCard />
          </Grid>
          <Grid item xs={2}>
            <SetCard />
          </Grid>
          <Grid item xs={2}>
            <SetCard />
          </Grid>
          <Grid item xs={2}>
            <SetCard />
          </Grid>
        </Grid>
        <Grid container spacing={5} justify={justify}>
          <Grid item xs={2}>
            <SetCard />
          </Grid>
          <Grid item xs={2}>
            <SetCard />
          </Grid>
          <Grid item xs={2}>
            <SetCard />
          </Grid>
          <Grid item xs={2}>
            <SetCard />
          </Grid>
        </Grid>
        <Grid container spacing={5} justify={justify}>
          <Grid item xs={2}>
            <SetCard />
          </Grid>
          <Grid item xs={2}>
            <SetCard />
          </Grid>
          <Grid item xs={2}>
            <SetCard />
          </Grid>
          <Grid item xs={2}>
            <SetCard />
          </Grid>
        </Grid>
        <Grid container spacing={5} justify={justify}>
          <Grid item xs={2}>
            <RemainingDeck />
          </Grid>
          <Grid item xs={2}>
            <ScorePile />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default App;
