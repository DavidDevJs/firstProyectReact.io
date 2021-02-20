import React from 'react';
import Error404 from '../images/404error.png';

function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <img className="w-50 offset-md-3" src={Error404} alt="Page not Found" />
      </div>
    </div>
  );
}

export default NotFound;
