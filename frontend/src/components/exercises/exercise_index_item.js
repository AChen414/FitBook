import React from 'react';

class ExerciseItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          notes: ''
        };

        this.showNotes = this.showNotes.bind(this);
    };

    showNotes() {
      return () => {
        const notes = this.props.exercise.notes;
        !this.state.notes ? this.setState({ notes: notes }) : this.setState({ notes: '' });
    };
  };

  notesButton() {
    if (this.props.exercise.notes) {
      if (this.state.notes) {
        return "Hide notes";
      } else {
        return "Show notes";
      }
    } else {
      return "No notes yet";
    }
  }

  editButton() {
    return (
      <button
        className="btn btn-info btn-sm edit-exercise"
        onClick={() => this.props.openModal("EDIT_EXERCISE", this.props.exercise._id)}
      >
        Edit exercise
      </button>
    )
  }

    render() {
        return (
          <div className="exercise-item">
            <div className="exercise-item-left">
              <div className="exercise-item-left-content">
                <div className="exercise-title">
                  {this.props.exercise.title}
                </div>
                <div className="exercise-info">
                  <div>Category: {this.props.exercise.category}</div>
                  <div>Equipment: {this.props.exercise.equipment}</div>
                  {this.props.exercise.user === this.props.currentUser ? this.editButton() : null}
                  <button
                    className="btn btn-info btn-sm show-notes"
                    onClick={this.showNotes()}
                  >
                    { this.notesButton() }
                  </button>
                  <div className="exercise-notes">
                    {this.state.notes}
                  </div>
                </div>
              </div>
            </div>
            <div className="exercise-item-right">
              <img
                className="exercise-item-image"
                src="https://fitbook-seeds.s3-us-west-1.amazonaws.com/dumbell.png"
              />
            </div>
          </div>
        );
    };
};

export default ExerciseItem;