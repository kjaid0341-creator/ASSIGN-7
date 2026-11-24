import React from 'react';
import { Link } from 'react-router';

function Navbar({ appliedCount }) {
  return (
    <nav className="navbar">
      <h2>Placement Portal</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/applications">Applications ({appliedCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
