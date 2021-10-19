import React from 'react';
import { Carousel } from 'react-bootstrap';
import Doctor from './Doctor.jpg';
import happyDoctor from'./img/happy-doctor.jpg';
import thankDoctor from'./img/thank.jpg';
import Shake from 'react-reveal/Shake';
import Old from './spatial-doctor/old-doctor.jpg';
import Dentel from './spatial-doctor/dentel.jpg';
import Women from './spatial-doctor/women.jpg';
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
<h2 style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>Our Spatial Doctor</h2>
<div className="container-image">
 
<div onMouseOver={changeBackground}>
<img width="25%" style={{borderRadius: '20px', marginTop: '5px'}} src={Old} alt="old-doctor"/>
<h5>Dr. DAVID ADAMS</h5>
<p><strong>David H. Adams, MD,</strong>ng is the Marie-Josée and Henry R. Kravis Professor and System Chairman
   of the Department of Cardiovascular Surgery at the Icahn School</p>
</div>
<div onMouseOver={changeBackground}>
<img width="25%" style={{borderRadius: '20px', marginTop: '5px'}} src={Dentel} alt="dental-doctor"/>
<h5>Dr. LEONARD GIRARDI</h5>
<p><strong>Dr. Leonard N. Girardi</strong> is a Professor and Chair of
   the Cardiothoracic Surgery department of at Weill Cornell Medicine</p>
</div>
<div onMouseOver={changeBackground}>
<img width="25%" style={{borderRadius: '20px', marginTop: '5px'}} src={Women} alt="women-doctor"/>
<h5>Dr. Elizabeth Blackwell</h5>
<p>The first woman in America to receive a medical degree,<strong> Elizabeth Blackwell</strong> championed
   the participation of women in the medical profession</p>
</div>
</div>
         <div style={{marginTop: '50px'}}>
         <img width="60%" height="60%" src={Doctor} alt="doctor-img"/>
         </div>
        </div>
    );
};

export default Home;