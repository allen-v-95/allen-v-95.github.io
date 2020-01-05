import React from 'react';

import TopNav from './TopNav';
import LeftNav from './LeftNav';
import Dashboard from './Dashboard';
import { PropTypes } from 'prop-types'

class App extends React.Component {

  constructor(){
    super();
    this.setChallengeName = this.setChallengeName.bind(this);
  }

  setChallengeName(challengeName){
    console.log(challengeName);
    this.props.history.push(`/create/${challengeName}`);
  }

  render(){

    return (
      <div className="App">
        <TopNav />
        <div className="bottom">
          <LeftNav />
          <Dashboard setChallengeName={this.setChallengeName}/>
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object
}

export default App;
