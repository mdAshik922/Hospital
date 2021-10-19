import { useContext } from "react";
import AuthContext from '../Hooks/UseFirebase';
const UseAuth = () =>{
    return useContext(AuthContext)
}
export default UseAuth;