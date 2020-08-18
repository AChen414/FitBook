import React from "react";
import { Link } from "react-router-dom";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      user: props.comment.user,
      text: props.comment.text,
      date: props.comment.date,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({ edit: true });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({
      text: this.props.comment.text,
      edit: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = this.props.comment;
    comment.text = this.state.text;
    this.props
      .updateComment(comment)
      .then(() => this.setState({ edit: false }))
      .then(() => this.props.fetchWorkoutComments(this.props.workoutId));
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment._id);
  }

  render() {
    // debugger
    const { comment, user } = this.props;

    let buttons;
    if (user.id === comment.user._id && this.state.edit === false) {
        buttons = (
            <div className="workout-show-page-comment-buttons">
                <button className="comment-button" onClick={this.handleEdit}>
                Edit
                </button>
                &nbsp;
                <button className="comment-button" onClick={this.handleDelete}>
                Delete
                </button>
            </div>
        );
    } else if (user.id === comment.user._id && this.state.edit === true) {
        buttons = (
          <div className="workout-show-page-comment-buttons">
            <button className="comment-button" onClick={this.handleCancel}>
              Cancel
            </button>
            &nbsp;
            <button className="comment-button" onClick={this.handleSubmit}>
              Save
            </button>
          </div>
        );
    }

    if (this.state.edit === false) {
        return (
        <div className="comment-content-container">
            <div className="commenter">
                {/* <Link to={`/profile/`}> */}
                    {comment.user.username}
                {/* </Link> */}
            </div>
            <div className="comment-content">
                <div className="comment-text">
                    <p>{comment.text}</p>
                </div>
                <div className="comment-time">
                    <p>{comment.date}</p>
                </div>
            </div>
            {buttons}
        </div>
        );
    } else {
        return (
        <div className="edit-comment-content">
            <input
                className="comment-box" 
                type="textarea"
                placeholder="Share your thought"
                value={this.state.text}
                onChange={this.update("text")}
            />
            {buttons}
        </div>
        );
    }
  }
}

export default Comment;