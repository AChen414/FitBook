import React from 'react';


class ExerciseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: 'Arms',
            equipment: 'None',
            notes: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const newExercise = Object.assign({}, this.state);
        this.props.composeExercise(newExercise).then(() => this.props.closeModal());
    }


    render() {
        return (
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={this.props.closeModal}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h3 className="modal-title">Create an Exercise</h3>
                    </div>
                    <form className="exercise-edit-form" onSubmit={this.handleSubmit}>
                        <div className="form-group exercise-info">
                            <label>Title:</label>
                            <input
                                type="text"
                                value={this.state.title}
                                onChange={this.handleInput('title')}
                            />
                        </div>
                        <div className="form-group exercise-category">
                            <label htmlFor="exampleFormControlSelect1">
                                Select Category
                            </label>
                            <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                                onChange={this.handleInput('category')}
                                value={this.state.category}
                            >
                                <option>Select Category</option>
                                <option value="Full-Body">Full Body</option>
                                <option value="Chest">Chest</option>
                                <option value="Arms">Arms</option>
                                <option value="Shoulders">Shoulders</option>
                                <option value="Legs">Legs</option>
                            </select>
                        </div>
                        <div className="form-group exercise-category">
                            <label htmlFor="exampleFormControlSelect2">
                                Equipment:
                            </label>
                            <select 
                                className="form-control"
                                id="exampleFormControlSelect2"
                                onChange={this.handleInput('equipment')}
                                value={this.state.equipment}
                            >
                                <option value="None">None</option>
                                <option value="Barbell">Barbell</option>
                                <option value="Dumbell">Dumbell</option>
                                <option value="Machine">Machine</option>
                            </select>
                        </div>
                        <div className="form-group exercise-info">
                            <label>Notes:
            </label>
                            <textarea
                                className='form-control'
                                rows="3"
                                placeholder='Write any notes you have about the exercise...'
                                onChange={this.handleInput('notes')}
                                value={this.state.notes}></textarea>
                        </div>
                        <button>
                            Create Exercise
          </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ExerciseForm;

            // <div className="exercise-form-modal">
            //     <div className="modal-dialog" role="document">
            //         <div className="modal-content">
            //             <div className="modal-header">
            //                 <h5 className="modal-title">New Exercise</h5>
            //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeModal} >
            //                     <span aria-hidden="true">&times;</span>
            //                 </button>
            //             </div>
            //             <div className="modal-body">
            //                 <div>
            //                     <form onSubmit={this.handleSubmit}>
            //                         <div className='form-group'>
            //                             <label>Title</label>
            //                             <input 
            //                                 type="text"
            //                                 value={this.state.title}
            //                                 onChange={this.handleInput('title')}
            //                             />
            //                         </div>
            //                         <div className='form-group'>
            //                             <label htmlFor='exercise-form-field2'>Category</label>
            //                             <select id='exercise-form-field2' onChange={this.handleInput('category')} value={this.state.category}>
            //                                 <option value="Arms">Arms</option>
            //                                 <option value="Chest">Chest</option>
            //                                 <option value="Full Body">Full Body</option>
            //                                 <option value="Legs">Legs</option>
            //                                 <option value="Shoulders">Shoulders</option>
            //                             </select>
            //                         </div>
            //                         <div className='form-group'>
            //                             <label htmlFor='exercise-form-field3'>Equipment</label>
            //                             <select id='exercise-form-field3' onChange={this.handleInput('equipment')} value={this.state.equipment}>
            //                                 <option value="None">None</option>
            //                                 <option value="Barbell">Barbell</option>
            //                                 <option value="Dumbell">Dumbell</option>
            //                                 <option value="Machine">Machine</option>
            //                             </select>
            //                         </div>
            //                         <div className="formgroup">
            //                             <label htmlFor='exercise-form-field4'>Notes</label>
            //                             <textarea
            //                                 className='form-control'
            //                                 id="exercise-form-field4"
            //                                 rows="3"
            //                                 placeholder='Write any notes you have about the exercise...'
            //                                 onChange={this.handleInput('notes')}
            //                                 value={this.state.notes}></textarea>
            //                         </div>
            //                         <div className="modal-footer">
            //                             <button type="submit" className="btn btn-primary">Create Exercise</button>
            //                             <button type="button" className="btn btn-secondary" onClick={this.props.closeModal} >
            //                                 Close
            //                             </button>
            //                         </div>
            //                     </form>
            //                 </div>

            //             </div>

            //         </div>
            //     </div>
            // </div>     
