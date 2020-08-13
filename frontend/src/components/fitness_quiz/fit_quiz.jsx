import React from 'react'
import quizQuestions from './api/quiz_questions'
import Quiz from './api/quiz'
import Result from './api/result'



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
            result: '',
            progress: 0
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
        this.setState({
            progress: this.state.progress + 25
        })
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
        let progressbar = (
          <div>
            <div className="progress-icons">
              <div className="progress-icon-each">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8FxJN8qVhUaX9sHO_YMLLhJmLU5KmZq41LA&usqp=CAU"
                  alt=""
                />
                <div className="progress-icon-label">Gender</div>
              </div>

              <div className="progress-icon-each">
                <img
                  src="https://cdn.onlinewebfonts.com/svg/img_86026.png"
                  alt=""
                />
                <div className="progress-icon-label">Age</div>
              </div>

              <div className="progress-icon-each">
                <img
                  src="https://i.pinimg.com/originals/58/b8/01/58b801823c2ee845a6fa3e749dbe3d83.png"
                  alt=""
                />
                <div className="progress-icon-label">Fitness</div>
              </div>
              <div className="progress-icon-each">
                <img
                  src="https://www.pngrepo.com/download/56544/clipboard-with-a-check-mark.png"
                  alt=""
                />
                <div className="progress-icon-label">Results</div>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped active"
                style={{ width: `${this.state.progress}%` }}
              ></div>
            </div>
          </div>
        );

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
                <h2>FREE EVALUATION TOOL</h2>
              </div>
                <div>
                    {progressbar}
                </div>
              <div className="App-Content">
                {this.state.result ? this.renderResult() : this.renderQuiz()}
              </div>
            </div>
            <div className="App-footer card-footer text-muted">
              <div>FitBook</div>
            </div>
          </div>
        );
    }
}


export default TestForm