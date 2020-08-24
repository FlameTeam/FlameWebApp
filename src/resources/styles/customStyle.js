import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // ____________________________________ Services & Team __________________________________

  gridBoxesContainer: {
    justifyContent: 'center',
  },

  header: {
    background: '#F6F6F6',
    flexGrow: '1',
    alignItem: 'center',
    [theme.breakpoints.up('xs')]: {
      paddingTop: '1.4em',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '2.5em',
      paddingBottom: '1.5em',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '3em',
      paddingBottom: '2em',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '3.5em',
      paddingBottom: '2.5em',
    },
  },

  services: {
    flexGrow: '1',
    alignItem: 'center',
    backgroundColor: '#F6F6F6',

    [theme.breakpoints.up('xs')]: {
      paddingTop: '1.4em',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '2.5em',
      paddingBottom: '1.5em',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '3em',
      paddingBottom: '2em',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '3.5em',
      paddingBottom: '2.5em',
    },
  },

  title: {
    color: '#F45C43',
    fontWeight: 'normal',
    textAlign: 'left',
    marginBottom: '1em',

    [theme.breakpoints.up('xs')]: {
      fontSize: '2.2em',
      marginLeft: '0.6em',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5em',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.7em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3em',
    },
  },

  gradientBackground: {
    background: 'linear-gradient(179.68deg, #F46443 4.56%, #FFD15C 255.72%)',
    flexGrow: '1',
    alignItem: 'center',

    [theme.breakpoints.up('xs')]: {
      paddingTop: '2.2em',
      paddingBottom: '2.1em',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '2em',
      paddingBottom: '2em',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '3em',
      paddingBottom: '3em',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '4em',
      paddingBottom: '4em',
    },
  },
}));

export default useStyles;
