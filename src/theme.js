import { createTheme } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[50],
    },
  },
  myButton: {
    color: "white",
    backgroundColor: "orange",
    border: "1px solid black",
  },
});