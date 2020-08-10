import React, { Component } from "react";
import NavBar from "../NavBar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import ThreadDisplay from "./ThreadDisplay/ThreadDisplay.js";
/**import Firebase from "../Fire";**/

class GroupPage extends Component {
  /**constructor(props) {
    super(props);

    this.database = Firebase.database();
  }**/
  render() {
    return (
      <div className="forum">
        <NavBar />
        <ThreadDisplay /**database={this.database}**/ />
      </div>
    );
  }
}
export default GroupPage;
