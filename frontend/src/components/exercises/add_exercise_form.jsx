import React from 'react';

class AddExerciseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            equipment: '',
            notes: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        const newExercise = Object.assign({}, this.state);
        this.props.composeExercise(newExercise).then(() => this.props.closeModal());
    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        return(
            <div className="add-exercise-form">
                <h1>Create an Exercise</h1>
                <p>Creating an exercise will add it to your collection of exercises to be a part of a workout</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="exercise-form-title">
                        <label>
                            <span>TITLE</span>
                            <input 
                                type="text"
                                value={this.state.title}
                                onChange={this.handleInput('title')}
                            />
                        </label>
                    </div>
                    <div className="exercise-form-back" onClick={() => this.props.closeModal()}>BACK</div>
                    <button className="exercise-form-submit">CREATE</button>
                </form>
            </div>
        )
    };
};

export default AddExerciseForm;