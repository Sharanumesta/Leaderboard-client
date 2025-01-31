import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid container d-flex align-items-center">
        <Link to="/" className="nav-brand fw-semibold fs-3 text-white text-decoration-none">Leaderboard</Link>
        <div className="d-flex align-items-center">
          <Link
            to="/"
            className="text-decoration-none text-white fw-bold fs-5 m-3"
          >
            Home
          </Link>
          <Link
            to="/add-user"
            className="btn btn-secondary fs-bold mx-4"
          >
            Add user
          </Link>
          <Link
            to="/leaderboard"
            className="btn btn-success fs-bold mx-4"
          >
            Leaderboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
