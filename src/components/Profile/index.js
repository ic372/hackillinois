import React, { Component } from "react";
import firebase from "../Fire";
import NavBar from "../NavBar";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "./profile.css";
import 'firebase/auth';

class Profile extends Component {
  delete() {
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
      // User deleted.
    }).catch(function(error) {  
      // An error happened.
    });
  }

  render() {
  return (
      <div className="ProfilePage">
        <NavBar />
        <div className="WelcomeMessage">
          <h2>Welcome {firebase.getCurrentUsername()}!</h2>
        </div>
        <MailOutlineIcon />
        <div className="ContactInfo">
          <h6>Your email: {firebase.getCurrentUserEmail()}</h6>
        </div>
        <button id="delete-button" onClick={this.delete}>
        DELETE YOUR ACCOUNT
        </button>
      </div>
    );
  };
}
export default Profile;
