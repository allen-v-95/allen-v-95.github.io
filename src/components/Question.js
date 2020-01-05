import React from 'react';
import '../scss/Question.scss';

class Question extends React.Component {

  constructor(){
    super();
    this.toggleCheck = this.toggleCheck.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);

    this.state = {
      answers: [],
      score: 0
    }
  }

  toggleCheck(e){
    if(e.target.checked){
      const answers = [...this.state.answers];
      answers.push(e.target.value);
      this.setState({ answers });
    }
    else if(!e.target.checked){
      const answers = [...this.state.answers];
      const answer = answers.indexOf(e.target.value);
      if(answer > -1){
        answers.splice (answer, 1);
      }
      this.setState({ answers });
    }
  }

  checkAnswer(){
    const correctAnswer = Object.keys(this.props.correctAnswers).map(key => key == `question-${this.props.count}` ? this.props.correctAnswers[key] : '').join('');
   
    if(this.state.answers == correctAnswer){
      let score = this.state.score;
      score = 1;
      this.setState({ score });
      }
    else if(this.state.answers !== correctAnswer){
      let score = this.state.score;
      score = -1;
      this.setState({ score });
    }
  }

  render(){
    const { details } = this.props; 
    
    return (
      <div className="question-view">
        <h2 className="question-view__number">Question{details.number}</h2>
        <h2 className="question-view__title">{details.title}</h2>
        <div className="answer-view">
          {details.answer1} <input onChange={this.toggleCheck} type="checkbox" className="answer" value={details.answer1}/>
          {details.answer2} <input onChange={this.toggleCheck} type="checkbox" className="answer" value={details.answer2}/>
          {details.answer3} <input onChange={this.toggleCheck} type="checkbox" className="answer" value={details.answer3}/>
          {details.answer4} <input onChange={this.toggleCheck} type="checkbox" className="answer" value={details.answer4}/>
        </div>
        <button onClick={this.checkAnswer}>check</button>
        <p>{this.state.score == 1 ? 'Correct' : '' || this.state.score == -1 ? 'Incorrect' : ''}</p>
      </div>
    )
  }
}

export default Question;
