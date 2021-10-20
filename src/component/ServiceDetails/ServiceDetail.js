import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import Fade from 'react-reveal/Fade';

const ServiceDetail = () => {
    let { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(()=>{
fetch(`/FackData.json/${serviceId}`)
.then(res => res.json())
.then(data => setService(data))
    }, [])
    return (
        <div>
            {serviceId}
             <div  >
           <img  src={service.picture} alt="pictures"/>
           <Fade left>
           <h2>Name:{service.name}</h2>
           </Fade>
            <p><strong>{service.about}</strong></p>
            </div>
        </div>
    );
};

export default ServiceDetail;