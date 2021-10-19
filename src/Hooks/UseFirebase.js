
import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword    } from "firebase/auth";
import initilazition from '../component/Firebase/Firebase.init';
initilazition();
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
    const singinWithGoogle = ()=>{
signInWithPopup(auth, googleProvider)
.then(result => {
    console.log(result.user)
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
const handleEmai= ()=>{
    setEmail(email);
}

const handlePassword = () =>{
    setPassword(password);
}
const signUpFrom =(e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      // Signed in 
      const user = result.user;
      // ...
      setError('');
    })
    .catch((error) => {
        setError(error.message);
      // ..
    });

}

const fromLogin =(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then(result => {
    // Signed in 
    const user = result.user;
    // ...
    setError('')
  })
  .catch((error) => {
   setError(error.message);
  });
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
        signUpFrom,
        fromLogin,
logout
    }
}
export default UseFirebase;