import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  media: {
    height: 0,
    paddingTop: '100%',
    backgroundSize: 'cover'
  },
  cardActions: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: '100%'
  },
  cardContent: {
    display: 'flex',
    flex: '1 0 auto',
    justifyContent: 'space-between',
  },
}));
