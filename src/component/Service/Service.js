import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';
import './Service.css';
const Service = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
       fetch('FakeData.json')
       .then(res =>res.json())
       .then(data => setUsers(data))
    },[])
    return (
        <div className="service-cart-style">
            {
                users.map(user => <ServiceCart
                key={user.id}
                service={user}
                ></ServiceCart>)
            }
        </div>
    );
};

export default Service;