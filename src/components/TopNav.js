import React from 'react';
import '../scss/TopNav.scss';
import { PropTypes } from 'prop-types';
import {Link} from 'react-router-dom';

class TopNav extends React.Component {

  render(){
    return (
      <div className="top-nav">
        <li><Link to='/'>Dashboard</Link></li>
        <li><Link to='/create'>Create</Link></li>
        <li><Link to='/results'>Results</Link></li>
      </div>
    )
  }
}

TopNav.contextTypes = {
  router: PropTypes.object
}

export default TopNav;
