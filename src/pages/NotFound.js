import React from 'react';
import Error404 from '../images/404error.png';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <img className="w-50 offset-md-3" src={Error404} alt="Page not Found" />
      </div>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
