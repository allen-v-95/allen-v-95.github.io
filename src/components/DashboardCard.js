import React from 'react';
import '../scss/DashboardCard.scss';

class DashboardCard extends React.Component {

  constructor(){
    super();

    this.openChallenge = this.openChallenge.bind(this);
  }

  openChallenge(){
    this.props.openChallenge(this.props.challengeName);
  }

  render(){
    return (
      <div className="dashboard-card">
        <h2 className="challenge-name">{this.props.challengeName}</h2>
        <button onClick={this.openChallenge}>Open Challenge</button>
      </div>
    )
  }
}

export default DashboardCard;
