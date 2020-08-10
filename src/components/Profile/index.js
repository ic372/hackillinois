import React from "react";
import firebase from "../Fire";
import NavBar from "../NavBar";

const Profile = () => {
  return (
    <div className="ProfilePage">
      <NavBar />
      <div>
        <h2>Welcome {firebase.getCurrentUsername()}</h2>
      </div>
    </div>
  );
};
export default Profile;
