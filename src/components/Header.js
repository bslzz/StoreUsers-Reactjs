import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid px-5">
          <div className="navbar-brand">
            <NavLink
              exact
              className="nav-link"
              activeClassName="nav-link active"
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div className="navbar-nav mr-auto">
            <div className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="nav-link active"
                to="/user"
              >
                Add User
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
