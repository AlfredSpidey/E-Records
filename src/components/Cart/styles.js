import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    minHeight: '100vh'
  },
  title: {
    margin: '0',
  },
  emptyButton: {
    backgroundColor: '#ffc02d',
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    backgroundColor: '#2f2c27',
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    width: '100%',
    padding: '20px',
    justifyContent: 'space-between',
  },
}));
