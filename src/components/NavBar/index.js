import React from "react";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import firebase from "../Fire";
import { withRouter } from "react-router-dom";

function NavBar(props) {
  const logout = () => {
    firebase.logout();
    props.history.push("/");
  };

  const toProfile = () => {
    props.history.push("/profile");
  };

  const toDash = () => {
    props.history.push("/dashboard");
  };

  const toNotes = () => {
    props.history.push("/notes");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={toDash} color="inherit" style={{ fontSize: 14 }}>
            Study Buddies
          </Button>
          <Button
            color="inherit"
            style={{ marginLeft: 830 }}
            onClick={toProfile}
          >
            Profile
          </Button>
          <Button style={{ marginLeft: 10 }} color="inherit" onClick={toNotes}>
            Notes
          </Button>
          <Button style={{ marginLeft: 10 }} color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);
