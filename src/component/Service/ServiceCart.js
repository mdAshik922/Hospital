import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './ServiceCart.css';

const ServiceCart = ({service}) => {
    const { id, name, picture, about } = service || {};

    return (
        <div>
            <div className="container-style" >
           <img className="img-style" src={picture} alt="health"/>
           <h2>Name:{name}</h2>
           
            <p><strong>{about.slice(0, 112)}</strong></p>
            <Link to={`/ServiceDetail/${id}`}>
           <button style={{backgroundColor: "blue", color: "white"}}>Learn-more....</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceCart;