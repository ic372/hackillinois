import React, { Component } from "react";
import "./posteditor.css";

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPostBody: "",
    };

    this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(
      this
    );

    this.createPost = this.createPost.bind(this);
  }

  handlePostEditorInputChange(e) {
    this.setState({
      newPostBody: e.target.value,
    });
  }

  createPost() {
    this.props.addPost(this.state.newPostBody);
    this.setState({
      newPostBody: "",
    });
  }

  render() {
    return (
      <div>
        <div className="panel panel-default post-editor">
          <div className="panel-body">
            <textarea
              className="form-control post-editor-input"
              value={this.state.newPostBody}
              onChange={this.handlePostEditorInputChange}
            />
            <button
              className="btn btn-primary post-editor-button"
              onClick={this.createPost}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostEditor;
