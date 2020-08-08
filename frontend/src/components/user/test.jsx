import React from 'react'
import Question from './fitnessTest/question'



class TestForm extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h2>React Quiz</h2>
                </div>
                <Question content="What is your favourite food?" />
            </div>

        );
    }
}


export default TestForm