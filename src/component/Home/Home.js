import React from 'react';
import { Carousel } from 'react-bootstrap';
import Doctor from './Doctor.jpg';
import happyDoctor from'./img/happy-doctor.jpg';
import thankDoctor from'./img/thank.jpg';
import Shake from 'react-reveal/Shake';
import Old from './spatial-doctor/old-doctor.jpg';
import Dentel from './spatial-doctor/dentel.jpg';
import Women from './spatial-doctor/women.jpg';
import Heart from './spatial-doctor/heart.png';
import Ear from './spatial-doctor/ear.png';
import Eye from './spatial-doctor/eye.png';

import './Home.css';
const Home = () => {
  function changeBackground(e) {
    e.target.style.background = 'red';
  }
    return (
        <div>
            <Carousel variant="dark">
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={happyDoctor}
      alt="Second slide"
    />
    <Carousel.Caption>
    <Shake>
      <h5 style={{color: 'blue', fontSize: 'xx-large', marginLeft: '170px'}}>Healthy Food Helthy Life</h5>
      <p style={{color: 'blue', fontSize: 'large', marginLeft: '200px'}}><strong>If you are sick, you should seek medical help</strong></p>
      </Shake>
  </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thankDoctor}
      alt="Third slide"
    />
    <Carousel.Caption>
    <Shake>
      <h5 style={{color: 'blue', fontSize: 'xx-large'}}>healthy food helthy life</h5>
      <p style={{color: 'blue', fontSize: 'large'}}><strong>If you are sick, you should seek medical help.</strong>&#128151;</p>
      </Shake>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h2 style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', fontSize: 'xx-large', fontWeight: 'bolder'}}>Our Spatial Doctor</h2>
<div className="container-image">
 
<div onMouseOver={changeBackground} style={{width: '400px', marginLeft: '35px'}}>
<img width="25%" style={{borderRadius: '20px', marginTop: '5px'}} src={Old} alt="old-doctor"/>
<h5>Dr. DAVID ADAMS</h5>
<p><strong>David H. Adams, MD,</strong>ng is the Marie-Josée and Henry R. Kravis Professor and System Chairman
   of the Department of Cardiovascular Surgery at the Icahn School</p>
</div>

<div onMouseOver={changeBackground} style={{width: '400px', marginLeft: '35px'}}>
<img width="25%" style={{borderRadius: '20px', marginTop: '5px'}} src={Dentel} alt="dental-doctor"/>
<h5>Dr. LEONARD GIRARDI</h5>
<p><strong>Dr. Leonard N. Girardi</strong> is a Professor and Chair of
   the Cardiothoracic Surgery department of at Weill Cornell Medicine</p>
</div>

<div onMouseOver={changeBackground} style={{width: '400px', marginLeft: '35px'}}>
<img width="25%" style={{borderRadius: '20px', marginTop: '5px'}} src={Women} alt="women-doctor"/>
<h5>Dr. Elizabeth Blackwell</h5>
<p>The first woman in America to receive a medical degree,<strong> Elizabeth Blackwell</strong> championed
   the participation of women in the medical profession</p>
</div>

<div onMouseOver={changeBackground} style={{width: '400px', marginLeft: '35px'}}>
<img width="25%" style={{borderRadius: '20px', marginTop: '5px'}} src={Heart} alt="women-doctor"/>
<h5>Dr. Aftab Gill</h5>
<p>Interventional cardiology, Coronary angiography, Pacemaker , Palpitations ,
   Hypertension (high blood pressure), Heart failure</p>
</div>

<div onMouseOver={changeBackground} style={{width: '400px', marginLeft: '35px'}}>
<img width="25%" style={{borderRadius: '20px', marginTop: '5px'}} src={Ear} alt="women-doctor"/>
<h5>Dr. Mr Thomas Jacques </h5>
<p>Rhinoplasty (nose job), Functional surgery of the nose ,
   Allergic rhinitis , Sinusitis , Smell disorders, Epistaxis</p>
</div>

<div onMouseOver={changeBackground} style={{width: '400px', marginLeft: '35px'}}>
<img width="25%" style={{borderRadius: '20px', marginTop: '5px'}} src={Eye} alt="women-doctor"/>
<h5>Dr. Carol Shields</h5>
<p>TCarol L. Shields, Director, Ocular Oncology Service, Wills Eye Hospital
   and Thomas Jefferson University, Philadelphia, PA, USA</p>
     </div>
 </div>
        {/* carton img */}
         <div style={{marginTop: '50px'}}>
         <img width="60%" height="60%" src={Doctor} alt="doctor-img"/>
         </div>
        </div>
    );
};

export default Home;