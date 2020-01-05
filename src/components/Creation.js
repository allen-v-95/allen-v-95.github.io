import React from 'react';
import '../scss/Creation.scss';

class Creation extends React.Component {

  constructor(){
    super();
    this.createQuestion = this.createQuestion.bind(this);
    this.correctAnswer = this.correctAnswer.bind(this);
    this.setValue = this.setValue.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
  }

  createQuestion(){
    const question = {
      number: this.props.count,
      title: this.name.value,
      answer1: this.answer1.value,
      answer2: this.answer2.value,
      answer3: this.answer3.value,
      answer4: this.answer4.value
    }
    this.props.createQuestion(question);
  }

  correctAnswer(e){
    if(e.target.checked){
      this.props.setCorrectAnswers(e.target.value);
    }
  }

  setValue(){
    this.setState({
      title : this.name.value
    })
  }

  nextQuestion(){
    this.name.value = null;
    this.answer1.value = null;
    this.answer2.value = null;
    this.answer3.value = null;
    this.answer4.value = null;
    this.props.nextQuestion();
  }

  previousQuestion(){
    this.name.value = null;
    this.answer1.value = null;
    this.answer2.value = null;
    this.answer3.value = null;
    this.answer4.value = null;
    this.props.previousQuestion();
  }

  render(){

    return (
      <div ref={(input) => this.creation = input} className="creation">
        <div className="question">
          <div className="question-number">Question {this.props.count}:</div>
          <input ref={(input) => this.name = input} type="text" className="question-text" />
        </div>

        <div className="answers">
        Answer 1:
          <div className="answer-input">
            <input ref={(input) => this.answer1 = input} type="text" className="answer1" />

            <input type="checkbox" onChange={this.correctAnswer} value={Object.keys (this.props.questions).map(key => key == `question-${this.props.count}` ?  this.props.questions[key].answer1 : '').join('')}/>
          </div>
          
          Answer 2:
          <div className="answer-input">
            <input ref={(input) => this.answer2 = input} type="text" className="answer2" />

            <input type="checkbox" onChange={this.correctAnswer} value={Object.keys (this.props.questions).map(key => key == `question-${this.props.count}` ?  this.props.questions[key].answer2 : '').join('')}/>
          </div>

          Answer 3:
          <div className="answer-input">
            <input ref={(input) => this.answer3 = input} type="text" className="answer3" />

            <input type="checkbox" onChange={this.correctAnswer} value={Object.keys (this.props.questions).map(key => key == `question-${this.props.count}` ?  this.props.questions[key].answer3 : '').join('')}/>
          </div>

          Answer 4:
          <div className="answer-input">
            <input ref={(input) => this.answer4 = input} type="text" className="answer4" />

            <input type="checkbox" onChange={this.correctAnswer} value={Object.keys (this.props.questions).map(key => key == `question-${this.props.count}` ?  this.props.questions[key].answer4 : '').join('')}/>
          </div>
        </div>
        <div className="button-section">
          <button onClick={this.createQuestion}>submit</button>
          <button onClick={this.nextQuestion}>next</button>
          <button onClick={this.previousQuestion}>previous</button>
        </div>
      </div>
    )



    // return (
    //   <div ref={(input) => this.creation = input} className="creation">
    //     <div className="question">
    //       <div className="question-number">Question {this.props.count}:</div>
    //       <input ref={(input) => this.name = input} type="text" className="question-text" value={Object.keys(this.props.questions).map(key => key == `question-${this.props.count}` ? this.props.questions[key].title : '').join('')}/>
    //     </div>

    //     <div className="answers">
    //       Answer 1:
    //       <input ref={(input) => this.answer1 = input} type="text" className="answer1" value={Object.keys(this.props.questions).map(key => key == `question-${this.props.count}` ? this.props.questions[key].answer1 : '').join('')}/>
          
    //       <input type="checkbox" onChange={this.correctAnswer} value={Object.keys(this.props.questions).map(key => key == `question-${this.props.count}` ? this.props.questions[key].answer1 : '').join('')}/>
          
    //       Answer 2:
    //       <input ref={(input) => this.answer2 = input} type="text" className="answer2" value={Object.keys(this.props.questions).map(key => key == `question-${this.props.count}` ? this.props.questions[key].answer2 : '').join('')}/>

    //       <input type="checkbox" onChange={this.correctAnswer} value={Object.keys(this.props.questions).map(key => key == `question-${this.props.count}` ? this.props.questions[key].answer2 : '').join('')}/>
          
    //       Answer 3:
    //       <input ref={(input) => this.answer3 = input} type="text" className="answer3" value={Object.keys(this.props.questions).map(key => key == `question-${this.props.count}` ? this.props.questions[key].answer3 : '').join('')}/>
          
    //       <input type="checkbox" onChange={this.correctAnswer} value={Object.keys(this.props.questions).map(key => key == `question-${this.props.count}` ? this.props.questions[key].answer3 : '').join('')}/>
          
    //       Answer 4:
    //       <input ref={(input) => this.answer4 = input} type="text" className="answer4" value={Object.keys(this.props.questions).map(key => key == `question-${this.props.count}` ? this.props.questions[key].answer4 : '').join('')}/>

    //       <input type="checkbox" onChange={this.correctAnswer} value={Object.keys(this.props.questions).map(key => key == `question-${this.props.count}` ? this.props.questions[key].answer4 : '').join('')}/>
    //     </div>

    //     <button onClick={this.createQuestion}>submit</button>
    //     <button onClick={this.props.nextQuestion}>next</button>
    //     <button onClick={this.props.previousQuestion}>previous</button>
    //   </div>
    // )
  }
}

export default Creation;


// checkingAnswer={Object.keys(this.props.correctAnswers).map(key => key == `question-${this.props.count}` ? console.log(this.props.correctAnswers[key]) : '')} 