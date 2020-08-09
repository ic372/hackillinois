import React from "react";
import { Button, Typography } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import firebase from "../Fire";
import { withRouter } from "react-router-dom";

const styles = (theme) => ({
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const useStyles = makeStyles({
  root: {
    minWidth: 1000,
    marginTop: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SearchBarStyle = {
  border: "solid",
  borderRadius: "2px",
  position: "relative",
  left: "10vh",
  height: "10vh",
  width: "100vh",
  marginTop: "5vh",
  marginBottom: "10vh",
};

function Dashboard(props) {
  const { classes } = props;
  const cardClasses = useStyles();

  return (
    <div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Enter item to be searched"
          style={SearchBarStyle}
          onChange={(e) => this.searchSpace(e)}
        />
      </div>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Card className={cardClasses.root}>
            <CardContent>
              <Typography
                className={cardClasses.title}
                color="textSecondary"
                gutterBottom
              >
                Subject 1
              </Typography>
              <Typography variant="h5" component="h2">
                Class name 1
              </Typography>
              <Typography className={cardClasses.pos} color="textSecondary">
                Prof name 1
              </Typography>
              <Typography variant="body2" component="p">
                Study group description
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Join Group
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={cardClasses.root}>
            <CardContent>
              <Typography
                className={cardClasses.title}
                color="textSecondary"
                gutterBottom
              >
                Subject 2
              </Typography>
              <Typography variant="h5" component="h2">
                Class name 2
              </Typography>
              <Typography className={cardClasses.pos} color="textSecondary">
                Prof name 2
              </Typography>
              <Typography variant="body2" component="p">
                Study group description
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Join Group
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={cardClasses.root}>
            <CardContent>
              <Typography
                className={cardClasses.title}
                color="textSecondary"
                gutterBottom
              >
                Subject 3
              </Typography>
              <Typography variant="h5" component="h2">
                Class name 3
              </Typography>
              <Typography className={cardClasses.pos} color="textSecondary">
                Prof name 3
              </Typography>
              <Typography variant="body2" component="p">
                Study group description
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Join Group
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Button
          type="submit"
          size="small"
          variant="contained"
          color="secondary"
          onClick={logout}
          className={classes.submit}
        >
          Logout
        </Button>
      </Grid>
    </div>
  );

  async function logout() {
    await firebase.logout();
    props.history.push("/");
  }
}

export default withRouter(withStyles(styles)(Dashboard));
