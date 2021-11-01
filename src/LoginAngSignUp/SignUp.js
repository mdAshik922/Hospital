import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

import Google from './google.png';
const SignUp = () => {

  const { signInWithGoogle, createAccountWithGoogle,setUser , setIsLoading , updateName } = UseAuth();

  const history= useHistory()
  const location = useLocation()
  const url= location.state?.from || "/home"

const [name , setName] =useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


const handleGetName=(e)=> {
  console.log(e.target.value);
 setName(e.target.value)
}

const handleGetEmail=(e)=> {
  console.log(e.target.value);
 setEmail(e.target.value)
}

const handleGetPassword=(e)=> {
  console.log(e.target.value);
 setPassword(e.target.value)
}



const handleRegistration=(e)=> {
  e.preventDefault();
  createAccountWithGoogle(email,password)
  .then((res) => {
    setIsLoading(true)
    updateName(name)
      setUser(res.user)
      history.push(url)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
    .finally(()=> {
      setIsLoading(false)
    })
}


  
const handleGoogleLogin = () => {
      signInWithGoogle()
        .then((res) => 
          {
            setIsLoading(true)
            setUser(res.user)
            history.push(url)
          }
            )
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false)
        })
    };

// Register page
    return (
        <div>
            <div>
            <Form onSubmit={handleRegistration}>
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <br/>

    <label htmlFor="name"><b>Name</b></label>
    <input type="text" onBlur={handleGetName} placeholder="Enter Nmae" name="name" id="name" required/>
   
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" onBlur={handleGetEmail} placeholder="Enter Email" name="email" id="email" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" onBlur={handleGetPassword} placeholder="Enter Password" name="psw" id="psw" required/>

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <br/>
    <p>By creating an account you agree to our <Link to="#">Terms & Privacy</Link>.</p>

    <button type="submit" className="registerbtn">Register</button>
  </div>
</Form>

<button onClick={handleGoogleLogin}><img witdth="25px" height="25px" style={{borderRadius: '35px'}} src={Google} alt="google" />Google Sign-Up</button>
         </div>
           
            <div className="container signin">
    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
  </div>
        </div>
    );
};

export default SignUp;