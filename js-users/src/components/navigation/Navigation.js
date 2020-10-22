import React from "react";
import { Link } from "react-router-dom";
import './navigation.css';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">New User</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Navigation;