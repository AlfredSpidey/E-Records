import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#fff',
    borderTop: '1px solid #ccc',
    marginTop: '20px',
    padding: '20px 20%'
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    fontSize: '19px'
  },
  image: {
    marginRight: '10px',
    height: '35px'
  },
  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },
  li: {
    color: '#676767de',
    textDecoration: 'none',
    "&:hover": {
      textDecoration: "underline"
    },
  },
  copyright: {
    color: '#676767de',
    textAlign: 'center'
  }
}));
