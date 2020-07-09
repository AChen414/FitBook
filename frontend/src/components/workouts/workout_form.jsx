import React from 'react';

class WorkoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            notes: '',
            exercises: [],
            search: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addExercise = this.addExercise.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    };

    componentDidMount() {
        this.props.fetchUserExercises(this.props.user.id);
    };

    updateSearch(e) {
        this.setState({ search: e.target.value.substring(0, 20)});
    };

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    };

    addExercise(exerciseId) {
        return () => {
            let currentExercises = this.state.exercises;
            currentExercises.push(exerciseId);
            this.setState({ exercises: currentExercises });
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        const newWorkout = Object.assign({}, this.state);
        delete newWorkout["search"]
        this.props.createWorkout(newWorkout);
    };

    renderErrors() {
        return this.props.errors.map((error, i) => {
            return (
                <li key={`error-${i}`} className="workout-error">
                    {error}
                </li>
            );
        });
    };

    render() {
        let filteredExercises = (Object.values(this.props.exercises)).filter((exercise) => {
            return exercise.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        return(
            <div className="workout-form-container">
                <div className="col-md-6 workout-form-left">
                    <form className="new-workout-form" onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <div className="workout-form-title">
                            <label className="workout-form-type">Title</label>
                            <input 
                                className="workout-form-field"
                                type="text"
                                onChange={this.update('title')}
                                value={this.state.title}
                            />
                        </div>

                        
                            <div className="workout-form-notes">
                                <label className="workout-form-type">Notes</label>
                                <textarea 
                                    onChange={this.update('notes')}
                                    value={this.state.notes}
                                    placeholder='Notes (ex. Upper chest focused workout)'
                                    cols="30" rows="10">
                                </textarea>
                            </div>

                            <label className="workout-form-type">Exercises
                                {this.state.exercises.map((exerciseId, i) => {
                                    return (
                                        <li key={`workout-exercise-${i}`}
                                            className="workout-exercise-item">
                                            {this.props.exercises[exerciseId].title}
                                        </li>
                                    )
                                })}
                            </label>
                        

                        <input 
                            type="submit" 
                            className="workout-form-submit" 
                            value="Create Workout"
                        />
                    </form>
                </div>

                            
                <div className="col-md-6 workout-form-right"> 
                    <div className="exercise-list">
                        <input 
                            type="text"
                            value={this.state.search}
                            onChange={this.updateSearch}
                            placeholder='Filter by exercise'
                        />
                        <ul>
                            {/* {Object.values(this.props.exercises).map((exercise, i) => ( */}
                            {filteredExercises.map((exercise, i) => (
                                <li key={`exercise-${i}`} onClick={this.addExercise(exercise._id)}>
                                    <div className="exercise-list-title">{exercise.title}</div>
                                    <div className="exerise-list-category">{exercise.category}</div>
                                    <div className="exerise-list-equipment">{exercise.equipment}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        );
    };
};

export default WorkoutForm;