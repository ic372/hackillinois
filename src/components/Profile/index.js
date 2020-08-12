import React from "react";
import firebase from "../Fire";
import NavBar from "../NavBar";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "./profile.css";

const Profile = () => {
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
    </div>
  );
};
export default Profile;
