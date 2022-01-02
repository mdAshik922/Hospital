import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import Fade from 'react-reveal/Fade';

const ServiceDetail = () => { 

    const {id}=useParams()
    
    const [specificDetail,setSpecificDetail] = useState({})


  useEffect(() =>
  fetch("/FackData.json")
  .then(res => res.json())
  .then(data=>{
    const matchedData= data.find(detail=> detail.id==id)
    setSpecificDetail(matchedData);
  })
,[])


 
        



    return (
        <div>
            <h2>Please Order now{id}</h2>
             <div  >
             
             <h2> This is dynamic page and id is:{id}</h2>
           <p>Name: {specificDetail?.about}</p>
           <p>price: {specificDetail?.price}</p>
             
            </div>
        </div>
    );
};

export default ServiceDetail;