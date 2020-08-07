import React from "react";

export default class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      value: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.currentTarget.value, buttons: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = { text: this.state.text, workoutId: this.props.workoutId };
    this.props
      .createComment(data)
  }

  render() {
    return (
      <div className="create-comment-container">
        <h4>Want to share your thought of this workout?</h4>

        <input
          className="comment-box"
          type="textarea"
          placeholder="Put your thought about this comment"
          value={this.state.text}
          onChange={this.handleChange}
        />

        <button className="comment-button" onClick={this.handleSubmit}>
            Submit
        </button>
      </div>
    );
  }
}
