import React, {useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
import Google from'./google.png'
import UseAuth from '../Hooks/UseAuth';
import { Form } from 'react-bootstrap';

// login page
const Login = () => {
  const { signInWithGoogle,setUser ,loginWithEmailAndPassword, setIsLoading} = UseAuth();

  const navigate= useNavigate()
  const location = useLocation()
  
  const url= location.state?.from || "/home"
  
  const [email , setEmail]= useState("")
  const [password , setPassword] = useState("")
  
  
  const handelChangeEmail = (e) =>{
    setEmail(e.target.value);
  };
  
  const handelChangePassword = (e)=> {
      setPassword(e.target.value);
  };
  

  const handelLogin=(e)=>{
      e.preventDefault();
  
      loginWithEmailAndPassword(email,password)
      .then((res) => {
        setIsLoading(true);
          setUser(res.user);
          navigate.push(url);
          // ...
        })
        .catch((error) => {
          
          const errorMessage = error.message;
        })
        .finally(() => {
          setIsLoading(false);
        });
  };
  
  
    const GoogleLogin = () => {
      signInWithGoogle()
        .then((res) => 
          {
            setIsLoading(true)
            setUser(res.user)
            navigate.push(url)
          }
            )
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false)
        })
    };
    return (
        <div>
            <div >
            <h2>Login form</h2>

<Form  onSubmit={handelLogin}>
  

  <div className="container">
    <label htmlFor="uname"><b>Email:</b></label>
    <input  onBlur={handelChangeEmail}
    type="text" placeholder="Enter Email" name="email" required/>
<br/><br/>
    <label htmlFor="psw"><b>Password:</b></label>
    <input  onBlur={handelChangePassword}
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
    <button  className="psw"> Forgot-password?</button>
  </div>
  <button onClick={GoogleLogin}><img witdth="25px" height="25px"  style={{borderRadius: '35px'}} src={Google} alt="google" />Google Sign</button>
</Form>
{/* account create */}
            </div>
            <p>Create new <Link to="/signup">account</Link></p>
        </div>
    );
};

export default Login;