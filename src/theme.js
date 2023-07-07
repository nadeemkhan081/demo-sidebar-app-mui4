import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  sidebarButton: {
    position: "fixed",
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
  appbar: {
    height: "50px",
    justifyContent: "center",
  },
  box1: {
    marginTop: "70px",
    justifyContent: "center",
    display: "flex",
    gap: theme.spacing(2),
  },
  gcontainer: {
    marginTop: "50px",
  },
  maincard: {
    marginTop: "50px",
  },
  cardbar: {
    marginTop: "30px",

    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
  buttonbar: {
    padding: "5px",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "20px",
  },
  typobar: {
    marginBottom: "10px",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px",
  },
  footer: {
    marginTop: "380px",
  },
}));

export default useStyles;
