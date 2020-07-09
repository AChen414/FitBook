import React from 'react';

class WorkoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            notes: '',
            exercises: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const newWorkout = Object.assign({}, this.state);
        this.props.createWorkout(newWorkout);
    }

    handleErrors() {
        return this.props.errors.map((errors => errors))
    }

    render() {
        return(
            <div>
                <form className="new-workout-form" onSubmit={this.handleSubmit}>
                    <label className="workout-form-type">Title</label>
                    <input 
                        className="workout-form-field"
                        type="text"
                        onChange={this.update('title')}
                        value={this.state.title}
                    />

                    <label className="workout-form-type">Notes</label>
                    <textarea 
                        onChange={this.update('notes')}
                        value={this.state.notes}
                        placeholder='Notes (ex. Upper chest focused workout)'
                        cols="30" rows="10">
                    </textarea>

                    <label className="workout-form-type">Exercises</label>

                    <input 
                        type="submit" 
                        className="workout-form-submit" 
                        value="Create Workout"
                    />
                </form>

            </div>
        )
    };
};

export default WorkoutForm;