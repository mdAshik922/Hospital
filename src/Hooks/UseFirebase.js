
import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, sendPasswordResetEmail, sendEmailVerification, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword    } from "firebase/auth";
import initilazition from '../component/Firebase/Firebase.init';

initilazition();

const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

    const singinWithGoogle = ()=>{
signInWithPopup(auth, googleProvider)
.then(result => {
     // error handel ..
    setUser(result.user)
})
.catch(error =>{
    setError(error.message)
})
    }
const logout = () =>{
    signOut(auth)
    .then(()=>{
        setUser({});
    })
}
const handleEmai= (e)=>{
    setEmail(e.target.value);
}

const handlePassword = (e) =>{
    setPassword(e.target.value);
}
const hendelRegistration= e =>{
    e.preventDefault();
   
    if(password.length < 6){
      setError('password must be 6 character long.');
      return;
    }
      if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setError('password must 2 upper case')
        return;
      }
      if(isLogin){
        prosseceLogin(email, password);
  
      }
      else{
        registerNewUser(email, password);
      }
    }
   
  const prosseceLogin = (e, email, password) => {
    e.preventDefault();
    signInWithEmailAndPassword (auth, email, password)
    .then(result => {
      const user = result.user;
       // error handel..
      setError('');
    })
    .catch(error =>{
      setError(error.message)
    })
  }
  const registerNewUser = (e, email, password) =>{
      e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
      // error handel
      const user = result.user;
      console.log(user);
      setError('')
      veryfyEmail();
    })
    .catch(error => {
      setError(error.message)
    })
  }
  
  const veryfyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(result => {
  console.log(result);
    })
  }
  
  const resetpassword = () => {
    sendPasswordResetEmail (auth, email)
    .then(result => { })
  }

useEffect(() =>{
    onAuthStateChanged(auth, user=>{
         if(user){
         console.log('inside state change', user);
       setUser(user);
    }
  })
 }, []);

    return {
        user,
        error,
        singinWithGoogle,
        handlePassword,
        handleEmai,
        hendelRegistration,
        resetpassword,
logout
    }
}
export default UseFirebase;