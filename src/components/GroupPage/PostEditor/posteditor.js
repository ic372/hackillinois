import React, { Component } from "react";

class PostEditor extends Component {
  state = {
    posts: [],
    currentNote: "",
    noteEditing: null,
    currentEdit: "",
  };
  componentDidMount() {
    const json = localStorage.getItem("posts");
    const posts = JSON.parse(json);
    if (posts) {
      this.setState(() => ({ posts }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts.length !== this.state.posts.length) {
      const json = JSON.stringify(this.state.posts);
      localStorage.setItem("posts", json);
    }
    this.state.posts.forEach((note, index) => {
      if (prevState.posts[index] !== note) {
        const json = JSON.stringify(this.state.posts);
        localStorage.setItem("posts", json);
      }
    });
  }
  addNote = () => {
    let posts = [...this.state.posts];
    posts.push(this.state.currentNote);
    this.setState({ posts, currentNote: "" });
  };
  render() {
    return (
      <div className="postsPage">
        <div className="heading">
          <h2>Posts</h2>
        </div>
        <div className="todoListMain">
          <div class="header">
            <textarea
              onChange={(event) =>
                this.setState({ currentNote: event.target.value })
              }
              value={this.state.currentNote}
              className="input"
              placeholder="Make a post."
            />
            <button
              className="btn btn-primary submit-note"
              onClick={this.addNote}
            >
              Post
            </button>
          </div>
          <div className="savedposts">
            {this.state.posts.map((note, index) => (
              <div className="posts" key={index}>
                {this.state.noteEditing === null ||
                this.state.noteEditing !== index ? (
                  <div className="note">
                    <div className="note-content">
                      <input type="text" value={note} />
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
                      <input
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
    let posts = [...this.state.posts].filter(
      (note, index) => index !== indexToDelete
    );
    this.setState({ posts });
  };
  setNoteEditing = (index) => {
    this.setState({ noteEditing: index, currentEdit: this.state.posts[index] });
  };

  editNote = (event) => {
    this.setState({ currentEdit: event.target.value });
  };

  submitEdit = (index) => {
    let posts = [...this.state.posts];
    posts[index] = this.state.currentEdit;
    this.setState({ posts, noteEditing: null });
  };
}

export default PostEditor;
