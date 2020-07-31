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
                  <button
                    className="btn btn-info btn-sm edit-exercise"
                    onClick={() => this.props.openModal("EDIT_EXERCISE")}
                  >
                    Edit exercise
                  </button>
                  <button
                    className="btn btn-info btn-sm show-notes"
                    onClick={this.showNotes()}
                  >
                    Notes
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