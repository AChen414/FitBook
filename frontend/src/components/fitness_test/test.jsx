import React from 'react'
import Question from './fitnessTest/question'
import quizQuestions from './fitnessTest/quiz_questions'
import Quiz from './fitnessTest/quiz'
import Result from './fitnessTest/result'

import {closeModal} from '../../actions/modal_actions'


class TestForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount: {},
            result: ''
        };
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentDidMount() {
        const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
        
        this.setState({
            question: quizQuestions[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
        
    }

    shuffleArray(array) {
        // var currentIndex = array.length, temporaryValue, randomIndex;

        // while (0 !== currentIndex) {

        //     randomIndex = Math.floor(Math.random() * currentIndex);
        //     currentIndex -= 1;

        //     temporaryValue = array[currentIndex];
        //     array[currentIndex] = array[randomIndex];
        //     array[randomIndex] = temporaryValue;
        // }

        return array;
    };

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
        
        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);

        return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
    }

    setUserAnswer(answer) {
        this.setState((state) => ({
            answersCount: {
                ...state.answersCount,
                [answer]: (state.answersCount[answer] || 0) + 1
            },
            answer: answer
        }));
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        });
    }

    setResults(result) {
        if (result.length === 1) {
            this.setState({ result: result[0] });
        } else {
            this.setState({ result: 'Undetermined' });
        }
    }

    renderQuiz() {
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
            />
        );
    }

    renderResult() {
                return <Result quizResult={this.state.result} closeModal={this.props.closeModal} />;
    }


    render() {
        return (
          <div className="modal-content fitness-modal">
            <div className="App">
              <div className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.props.closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h2>Fitness Test</h2>
              </div>

              {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
          </div>
        );
    }
}


export default TestForm