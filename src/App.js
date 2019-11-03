import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
//import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Components
import Navbar from './components/Navbar';
// Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#676767",
      main: "#424242",
      dark: "#2e2e2e",
      contrastText: "#fff"
    },
    secondary: {
      light: "#33bfff",
      main: "#00b0ff",
      dark: "#007bb2",
      contrastText: "#000"
    }
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
