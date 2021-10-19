// Import the functions you need from the SDKs you need
import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";
// Initialize Firebase
const initilazition = () =>{
    initializeApp(firebaseConfig)
} ;


export default initilazition;