import React from 'react';
import '../scss/LeftNav.scss';

class LeftNav extends React.Component {
  render(){
    return (
      <div className="left-nav">
        <div className="profile">
          <p>User:</p>
          <p>Victoria Allen</p>
        </div>
      </div>
    )
  }
}

export default LeftNav;
