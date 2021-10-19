import React from 'react';
import {useParams} from "react-router-dom";

const Useparam = () => {
    function Service() {
        let { serviceId } = useParams();

        return <div>Now showing post {serviceId}</div>;
      }
        
    
};

export default Useparam;