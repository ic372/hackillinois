import React from "react";
import firebase from "../Fire";
import NavBar from "../NavBar";
import "./profile.css";

const Profile = () => {
  return (
    <div className="ProfilePage">
      <NavBar />
      <div className="WelcomeMessage">
        <h2>Welcome {firebase.getCurrentUsername()}!</h2>
      </div>
      <div className="GroupsJoined">
        <h6>Groups you have joined: </h6>
      </div>
    </div>
  );
};
export default Profile;
