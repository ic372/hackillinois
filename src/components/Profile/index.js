import React from "react";
import firebase from "../Fire";

const Profile = () => {
  return (
    <div className="ProfilePage">
      <div className="md:pl-4">
        <h2 className="text-2xl font-semibold">
          {firebase.getCurrentUsername()}
        </h2>
        <h3 className="italic">faruq123@gmail.com</h3>
      </div>
    </div>
  );
};
export default Profile;
