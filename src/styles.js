import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '90vh'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  userCard: {
    marginBottom: theme.spacing(2),
    border: '2px green solid'
  },
  hide: {
    display: 'none',
  },
  noLink: {
    color: '#222',
    textDecoration: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '5rem',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  center: {
    textAlign: 'center',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  middle: {
    position: 'relative',
    top: '40%',
    textAlign: 'center',
  },
  answers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  answer: {
    flexBasis: '20%',
    flexGrow: '1',
    margin: '1rem',
    textAlign: 'center'
  },
  likeButton: {
    display: 'flex',
    flexBasis: '40%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  author: {
    display: 'flex',
    flexBasis: '40%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem'
  },
  containerCenter: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'column',
    alignItems: 'center'
  },
  newQuestions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  newQuestion: {
    flexBasis: '25%',
    margin: '1rem'
  }

}));

export default useStyles;
