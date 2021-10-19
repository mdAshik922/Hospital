import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Google from'./google.png'

import UseFirebase from '../Hooks/UseFirebase';

// login page
const Login = () => {
    const {singinWithGoogle, fromLogin}= UseFirebase();
  
    return (
        <div>
            <div >
            <h2>Login Form</h2>

<from method="post" onSubmit={fromLogin}>
  

  <div class="container">
    <label htmlFor="uname"><b>Email:</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>
<br/><br/>
    <label htmlFor="psw"><b>Password:</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
    <br/><br/>
    <button style={{margin: '5px'}} type="submit">Login</button>
    <label><br/><br/>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>
  <br/><br/>
  <div class="container" style={{backgroundColor:'#f1f1f1'}}>
    <button style={{margin: '5px'}} type="button" className="cancelbtn">Cancel</button>
    <span className="psw"><Link to="#"> Forgot-password?</Link></span>
  </div>
  <button onClick={singinWithGoogle}><img witdth="20px" height="20px" src={Google} alt="google" />Google Sign</button>
</from>
{/* account create */}
            </div>
            <p>Create new <Link to="/signup">account</Link></p>
        </div>
    );
};

export default Login;