import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import UseFirebase from '../Hooks/UseFirebase';


import Google from './google.png';
const SignUp = () => {
    const {singinWithGoogle, signUpFrom}= UseFirebase();

// Register page
    return (
        <div>
            <div>
            <form onSubmit={signUpFrom}>
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <br/>

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <br/>
    <p>By creating an account you agree to our <Link to="#">Terms & Privacy</Link>.</p>

    <button type="submit" className="registerbtn">Register</button>
  </div>
  
 

</form>
<button onClick={singinWithGoogle}><img witdth="20px" height="20px" src={Google} alt="google" />Google Sign-Up</button>
            </div>
            <div className="container signin">
    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
  </div>
        </div>
    );
};

export default SignUp;