import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import Fade from 'react-reveal/Fade';

const ServiceDetail = () => { 
    const {id} = useParams();
    const [specificDetail, setSpecificDetail] = useState({});

  useEffect(() =>
  fetch("/FakeData.json")
  .then(res => res.json())
  .then(data=>{
    const matchedData= data.find(detail=> detail.id==id)
    setSpecificDetail(matchedData);})
    ,[id]);
  
    return (
        <div style={{marginBottom: "15%"}}>
             <div>
             <Fade left><p><span style={{fontWeight: "bold"}}>Name:</span> {specificDetail?.name}</p></Fade>
           <img src={specificDetail?.picture} alt="health"/>
          <div style={{margin:"2% 20%"}}>
             <p> {specificDetail?.about}</p>
          </div>
            </div>
        </div>
    );
};

export default ServiceDetail;