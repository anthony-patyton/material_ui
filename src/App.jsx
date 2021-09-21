import { Button, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";

const useStyles = makeStyles((theme)  => ({
  button:{
    ...theme.myButton,
    // color: "white",
    // backgroundColor: theme.palette.primary.main,
  },
}));


const App = () => {
  const classes = useStyles();

  return(
    <>
      <Button 
        variant="contained" 
        size="large"
        startIcon={<Person />}
        className={classes.button}
        // style={{backgroundColor:"purple", color:"white"}}
      >
        Material UI
      </Button>
    </>
  )
};

export default App;