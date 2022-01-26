import React from 'react';
import { Link } from 'react-router-dom';

import './ServiceCart.css';

const ServiceCart = ({service}) => {
    const { id, name, picture, about } = service || {};

    return (
        <div>
            <div className="container-style" >
           <img className="img-style" src={picture} alt="health"/>
           <h2>Name:{name}</h2>
           
            <p><strong>{about.slice(0, 112)}<Link to={`/ServiceDetail/${id}`}>Learn-more</Link></strong></p>
            </div>
        </div>
    );
};

export default ServiceCart;