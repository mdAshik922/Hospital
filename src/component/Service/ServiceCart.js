import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './ServiceCart.css';
const ServiceCart = ({service}) => {
   
    const {name, picture, about} = service || {};
    return (
        <div>
            <div className="container-style" >
           <img className="img-style" src={picture} alt="pictures"/>
           <Fade left>
           <h2>Name:{name}</h2>
           </Fade>
            <p><strong>{about.slice(0, 112)}<Link>Learn-more</Link></strong></p>
            </div>
        </div>
    );
};

export default ServiceCart;