import React, { Component } from "react";
import TodoItems from "./TodoItems";
import NavBar from "../NavBar";

import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        //stores an object that has both entered text and unique key value
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem), //set items property with this
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault(); //override default behavior
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="NotesPage">
        <NavBar />
        <div className="heading">
          <h2>Your Notes</h2>
        </div>
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input
                ref={(a) => (this._inputElement = a)} //stores ref to input elem in _inputElement
                placeholder="Type in your notes"
              ></input>
              <button type="submit">Add a note</button>
            </form>
          </div>
          <TodoItems entries={this.state.items} delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default TodoList;
