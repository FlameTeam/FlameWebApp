import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logoBox: {
    cursor: 'pointer',
  },

  image: {
    [theme.breakpoints.up('xs')]: {
      marginLeft: '0.6em',
      height: '60px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '80px',
    },
  },
}));

export default useStyles;
