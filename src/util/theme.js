export default {
  palette: {
    primary: {
      light: "#676767",
      main: "#424242",
      dark: "#2e2e2e",
      contrastText: "#fff"
    },
    secondary: {
      light: "#f73378", //"#33bfff",
      main: "#f50057", //"#00b0ff",
      dark: "#ab003c", //"#007bb2",
      contrastText: "#000"
      //#ab003c
      //#f50057
      //#f73378
    }
  },
  spreadThis: {
    typography: {
      useNextVariants: true
    },
    form: {
      textAlign: "center"
    },
    image: {
      margin: "20px auto 20px auto"
    },
    pageTitle: {
      margin: "10px auto 10px auto"
    },
    textField: {
      margin: "10px auto 10px auto"
    },
    button: {
      marginTop: 20,
      position: "relative"
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10
    },
    progress: {
      position: "absolute"
    },
    invisibleSeparator: {
      border: "none",
      margin: 4
    },
    visibleSeparator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20
    }
  }
};
