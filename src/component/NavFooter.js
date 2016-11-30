import React from 'react';
import {Link} from 'react-router';

class NavFooter extends React.Component {
  render () {
    return(
      <div className='nav-footer'>
        <Link to='/' activeStyle={{color: '#00E676'}} onlyActiveOnIndex={true}>
          <span className="glyphicon glyphicon-home" aria-hidden="true"></span><br />Home
        </Link>
        <Link to='/blog' activeStyle={{color: '#00E676'}}>
          <span className="glyphicon glyphicon-time" aria-hidden="true"></span><br />Blog
        </Link>
        <Link to='/work' activeStyle={{color: '#00E676'}}>
          <span className="glyphicon glyphicon-edit" aria-hidden="true"></span><br />Work
        </Link>
        <Link to='/about' activeStyle={{color: '#00E676'}}>
          <span className="glyphicon glyphicon-leaf" aria-hidden="true"></span><br />About
        </Link>
      </div>
    )
  }
}

export default NavFooter;
