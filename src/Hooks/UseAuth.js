import { useContext } from 'react';
import { AuthContext } from '../component/Contex/AuthProvider';

const UseAuth = () => {
    return useContext(AuthContext);
}

export default UseAuth;