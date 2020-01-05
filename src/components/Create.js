import React from 'react';
import '../scss/Create.scss';

import TopNav from './TopNav';
import LeftNav from './LeftNav';
import Creation from './Creation';
import Question from './Question';
import base from '../base';

class Create extends React.Component {

  constructor(){
    super();
    this.createQuestion = this.createQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.setCorrectAnswers = this.setCorrectAnswers.bind(this);

    this.state = {
      questions: {},
      answers: {},
      count: 1,
      correctAnswers: {},
      moveUp: 0
    }
  }

  componentWillMount(){
    //runs right before app is rendered
    this.ref = base.syncState(`/create/${this.props.match.params.challengeId}/questions`, {
        context: this,
        state: 'questions'
    });
    this.ref = base.syncState(`/create/${this.props.match.params.challengeId}/correctAnswers`, {
      context: this,
      state: 'correctAnswers'
  });
}

  createQuestion(question){
    const questions = {...this.state.questions};
    questions[`question-${this.state.count}`] = question;
    this.setState({ questions });

    // let count = this.state.count;
    // count++;
    // this.setState({ count });

    // let moveUp = this.state.moveUp;
    // moveUp++;
    // this.setState({ moveUp });
  }

  nextQuestion(){
    let count = this.state.count;
    count++;
    this.setState({ count });

    let moveUp = this.state.moveUp;
    moveUp++;
    this.setState({ moveUp });
  }

  previousQuestion(){
    let count = this.state.count;
    if(count == 1){
      return;
    }
    count--;
    this.setState({ count });

    let moveUp = this.state.moveUp;
    if(moveUp == 0){
      return;
    }
    moveUp--;
    this.setState({ moveUp });
  }

  setCorrectAnswers(answer){
      const correctAnswers = {...this.state.correctAnswers};
      correctAnswers[`question-${this.state.count}`] = answer;
      this.setState({ correctAnswers });
      console.log(correctAnswers);
  }

  setChallengeName(name){
    const challengeName = name;
    this.context.router.history.push(`/create/${challengeName}`);
  }


  render(){

    return (
      <div className="create">
        <TopNav />
        <div className="bottom">
          <LeftNav />
          <div className="main">
            <Creation setChallengeName={this.setChallengeName} correctAnswers={this.state.correctAnswers} setCorrectAnswers={this.setCorrectAnswers} questions={this.state.questions} previousQuestion={this.previousQuestion} nextQuestion={this.nextQuestion} createQuestion={this.createQuestion} count={this.state.count} />
            <div className="test">
            <div className="question-container" style={{marginTop: this.state.moveUp*-360}}>
              {Object.keys(this.state.questions)
              .map(key => <Question checkScore={this.checkScore} correctAnswers={this.state.correctAnswers} key={key} index={key} details={this.state.questions[key]} count={this.state.count} checkedAnswers={this.checkedAnswers}/>)
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
