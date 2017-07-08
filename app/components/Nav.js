var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav() {
  return(
    <nav className='nav'>
      <NavLink exact activeClassName='active' to='/'>
        Home
      </NavLink>
      <NavLink activeClassName='active' to='/battle'>
        Battle
      </NavLink>
      <NavLink activeClassName='active' to='/popular'>
        Popular
      </NavLink>
    </nav>
  );
}

module.exports = Nav;
