import React from 'react';
import '../scss/Dashboard.scss';

import DashboardCard from './DashboardCard';

class Dashboard extends React.Component {

  constructor(){
    super();
    this.setChallengeName = this.setChallengeName.bind(this);
    this.openChallenge = this.openChallenge.bind(this);
  }

  setChallengeName(){
    const challengeName = this.challengeName.value;
    this.props.setChallengeName(challengeName);
   } 

   openChallenge(challengeName){
    this.props.setChallengeName(challengeName);
   }

  render(){
    return (
      <div className="dashboard">
        <input type="text" ref={(input) => this.challengeName = input}/>
        <button onClick={this.setChallengeName} className="set-name">Set Challenge Name</button>
        <div className="cards-container">
          <DashboardCard openChallenge={this.openChallenge} challengeName="Challenge1"/>
          <DashboardCard openChallenge={this.openChallenge} challengeName="Challenge2"/>
          <DashboardCard openChallenge={this.openChallenge} challengeName="Challenge3"/>
        </div>
      </div>
    )
  }
}

export default Dashboard;
