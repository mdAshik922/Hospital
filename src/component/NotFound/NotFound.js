import React from 'react';
import { Link } from 'react-router-dom';
import error from './not-found.jpg';
const NotFound = () => {
    return (
        <div>
            <div>
        <img width="50%" height="50%" src={error} alt="page-error"/>
              <Link to="/home">
              <button style={{backgroundColor: "red", width: '35%'}} >
                  <strong>Go-Back</strong></button>
              </Link>
            </div>
        </div>
    );
};

export default NotFound;