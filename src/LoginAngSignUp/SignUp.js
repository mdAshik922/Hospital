import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

import Google from './google.png';
const SignUp = () => {
    const {singinWithGoogle, hendelChangeEmail, hendelChangePassword, hendelRegistration} = UseAuth();

// Register page
    return (
        <div>
            <div>
            <Form onSubmit={hendelRegistration}>
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <br/>

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" onBlur={hendelChangeEmail} placeholder="Enter Email" name="email" id="email" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" onBlur={hendelChangePassword} placeholder="Enter Password" name="psw" id="psw" required/>

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <br/>
    <p>By creating an account you agree to our <Link to="#">Terms & Privacy</Link>.</p>

    <button type="submit" className="registerbtn">Register</button>
  </div>
</Form>

<button onClick={singinWithGoogle}><img witdth="25px" height="25px" style={{borderRadius: '35px'}} src={Google} alt="google" />Google Sign-Up</button>
         </div>
           
            <div className="container signin">
    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
  </div>
        </div>
    );
};

export default SignUp;