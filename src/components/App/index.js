import React, { useState, useEffect } from "react";
import "./styles.css";
import HomePage from "../Home";
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard";
import Profile from "../Profile";
import GroupPage from "../GroupPage";
import Notes from "../Notes";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "../Fire";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4dabf5",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#fff",
    },
    secondary: {
      light: "#33bfff",
      main: "#00b0ff",
      dark: "#007bb2",
      contrastText: "#fff",
    },
  },
});

export default function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/group" component={GroupPage} />
          <Route exact path="/notes" component={Notes} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  ) : (
    <div id="loader">
      <CircularProgress />
    </div>
  );
}
