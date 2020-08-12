import React, { Component } from "react";
import NavBar from "../NavBar";

import "./TodoList.css";

class ToDoList2 extends Component {
  state = {
    notes: [],
    currentNote: "",
    noteEditing: null,
    currentEdit: "",
  };
  componentDidMount() {
    const json = localStorage.getItem("notes");
    const notes = JSON.parse(json);
    if (notes) {
      this.setState(() => ({ notes }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes.length !== this.state.notes.length) {
      const json = JSON.stringify(this.state.notes);
      localStorage.setItem("notes", json);
    }
    this.state.notes.forEach((note, index) => {
      if (prevState.notes[index] !== note) {
        const json = JSON.stringify(this.state.notes);
        localStorage.setItem("notes", json);
      }
    });
  }
  addNote = () => {
    let notes = [...this.state.notes];
    notes.push(this.state.currentNote);
    this.setState({ notes, currentNote: "" });
  };
  render() {
    return (
      <div className="NotesPage">
        <NavBar />
        <div className="heading">
          <h2>Your Notes</h2>
        </div>
        <div className="todoListMain">
          <div class="header">
            <textarea
              onChange={(event) =>
                this.setState({ currentNote: event.target.value })
              }
              value={this.state.currentNote}
              className="input"
              placeholder="Notes"
            />
            <button
              className="btn btn-primary submit-note"
              onClick={this.addNote}
            >
              Submit
            </button>
          </div>
          <div className="savedNotes">
            {this.state.notes.map((note, index) => (
              <div className="notes" key={index}>
                {this.state.noteEditing === null ||
                this.state.noteEditing !== index ? (
                  <div className="note">
                    <div className="note-content">
                      <textarea className="input" type="text" value={note} />
                      <button
                        className="btn btn-info edit-button"
                        onClick={() => this.setNoteEditing(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger delete-button"
                        onClick={() => this.deleteNote(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="note">
                    <div className="note-content">
                      <textarea
                        className="input"
                        type="text"
                        value={this.state.currentEdit}
                        onChange={(event) => this.editNote(event)}
                      />
                      <button
                        className="btn btn-success done-button"
                        onClick={() => this.submitEdit(index)}
                      >
                        Done
                      </button>
                      <button
                        className="btn btn-danger delete-button"
                        onClick={() => this.deleteNote(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  deleteNote = (indexToDelete) => {
    let notes = [...this.state.notes].filter(
      (note, index) => index !== indexToDelete
    );
    this.setState({ notes });
  };
  setNoteEditing = (index) => {
    this.setState({ noteEditing: index, currentEdit: this.state.notes[index] });
  };

  editNote = (event) => {
    this.setState({ currentEdit: event.target.value });
  };

  submitEdit = (index) => {
    let notes = [...this.state.notes];
    notes[index] = this.state.currentEdit;
    this.setState({ notes, noteEditing: null });
  };
}

export default ToDoList2;
