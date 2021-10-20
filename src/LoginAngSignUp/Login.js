import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Google from'./google.png'
import UseAuth from '../Hooks/UseAuth';
import { Form } from 'react-bootstrap';

// login page
const Login = () => {
    const {singinWithGoogle, hendelChangeEmail, hendelChangePassword, resetpassword, hendelRegistration}= UseAuth();
  
    return (
        <div>
            <div >
            <h2>Login form</h2>

<Form method="post" onSubmit={hendelRegistration}>
  

  <div className="container">
    <label htmlFor="uname"><b>Email:</b></label>
    <input  onBlur={hendelChangeEmail}
    type="text" placeholder="Enter Email" name="email" required/>
<br/><br/>
    <label htmlFor="psw"><b>Password:</b></label>
    <input  onBlur={hendelChangePassword}
   type="password" placeholder="Enter Password" name="psw" required/>
    <br/><br/>
    <button style={{margin: '5px'}} type="submit">Login</button>
    <label><br/><br/>
      <input 
  
    type="checkbox"  name="remember"/> Remember me
    </label>
  </div>
  <br/><br/>
  <div className="container" style={{backgroundColor:'#f1f1f1'}}>
    <button style={{margin: '5px'}} type="button" className="cancelbtn">Cancel</button>
    <button onClick={resetpassword} className="psw"> Forgot-password?</button>
  </div>
  <button onClick={singinWithGoogle}><img witdth="25px" height="25px"  style={{borderRadius: '35px'}} src={Google} alt="google" />Google Sign</button>
</Form>
{/* account create */}
            </div>
            <p>Create new <Link to="/signup">account</Link></p>
        </div>
    );
};

export default Login;