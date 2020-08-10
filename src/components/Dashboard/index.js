import React, { Component } from "react";
import { Button, Typography } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
/**can add an icon for app in nav bar later */
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withRouter } from "react-router-dom";
import groupsList from "../groups.json";
import "./search.css";
import NavBar from "../NavBar";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

class Dashboard extends Component {
  cardStyle = {
    display: "block",
    width: "80vw",
    alignItems: "stretch",
  };

  state = {
    search: "",
  };

  toGroupPage = () => {
    this.props.history.push("/group");
  };

  renderGroup = (group) => {
    const { search } = this.state;
    const { classes } = this.props;

    if (
      search !== "" &&
      group.title.toLowerCase().indexOf(search.toLowerCase()) === -1
    ) {
      return null;
    }

    return (
      <Grid item xs={12}>
        <Card className={classes.root} style={this.cardStyle}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {group.subject}
            </Typography>
            <Typography variant="h5" component="h2">
              {group.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {group.prof}
            </Typography>
            <Typography variant="body2" component="p">
              {group.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={this.toGroupPage}
              className={classes.submit}
            >
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

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <NavBar />
        <div className="spacer">
          <h2>Find your study buddies!</h2>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search Group"
            onChange={this.onchange}
          />
          <Button
            size="small"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Search
          </Button>
        </div>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
        >
          {groupsList.group.map((group) => {
            return this.renderGroup(group);
          })}
        </Grid>
      </main>
    );
  }
}

export default withRouter(withStyles(useStyles)(Dashboard));
