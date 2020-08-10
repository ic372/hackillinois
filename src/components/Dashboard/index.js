import React, { Component } from "react";
import { Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
/**can add an icon for app in nav bar later */
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import firebase from "../Fire";
import { withRouter } from "react-router-dom";
import groupsList from "../groups.json";
import "./search.css";
/**Need to move the logout button to a navbar later */

const styles = (theme) => ({
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Dashboard extends Component {
  state = {
    search: "",
  };

  renderGroup = (group) => {
    const { search } = this.state;

    if (
      search !== "" &&
      group.title.toLowerCase().indexOf(search.toLowerCase()) === -1
    ) {
      return null;
    }

    return (
      <Grid item xs={12} mx={15}>
        <Card style={{ minWidth: 500, marginTop: 15 }}>
          <CardContent>
            <Typography
              style={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            >
              {group.subject}
            </Typography>
            <Typography variant="h5" component="h2">
              {group.title}
            </Typography>
            <Typography style={{ marginBottom: 12 }} color="textSecondary">
              {group.prof}
            </Typography>
            <Typography variant="body2" component="p">
              {group.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="primary">
              Join Group
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  onchange = (e) => {
    this.setState({ search: e.target.value });
  };

  logout = () => {
    firebase.logout();
    this.props.history.push("/"); /**need to fix */
  };

  toProfile = () => {
    this.props.history.push("/profile");
  };

  render() {
    return (
      <div>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className="Title">
                Study Buddies
              </Typography>
              <Button
                color="inherit"
                style={{ marginLeft: 900 }}
                onClick={this.toProfile}
              >
                Profile
              </Button>
              <Button
                style={{ marginLeft: 10 }}
                color="inherit"
                onClick={this.logout}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className="container">
          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={12} mx="auto">
              <input
                type="text"
                placeholder="Search Group"
                onChange={this.onchange}
              />
              <button className="inputButton">Search</button>
            </Grid>
            <div className="row">
              {groupsList.group.map((group) => {
                return this.renderGroup(group);
              })}
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Dashboard));
