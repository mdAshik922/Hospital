import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import Fade from 'react-reveal/Fade';

const ServiceDetail = () => { 
    const {id} = useParams();
    
    const [specificDetail, setSpecificDetail] = useState({});


  useEffect(() =>
  fetch("/FackData.json")
  .then(res => res.json())
  .then(data=>{
    const matchedData= data.find(detail=> detail.id==id)
    setSpecificDetail(matchedData);
  })
,[]);

    return (
        <div>
             <div>
           <p>Name: {specificDetail?.name}</p>
           <img className="img-style" src={specificDetail?.picture} alt="service"/>
           <p> {specificDetail?.about}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;