import React from 'react';

import TopNav from './TopNav';
import LeftNav from './LeftNav';

class Results extends React.Component {
  render(){

    return (
      <div className="create">
        <TopNav />
        <LeftNav />
        {/* <Submissions /> */}
      </div>
    );
  }
}

export default Results;
