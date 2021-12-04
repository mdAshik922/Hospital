import { useContext } from 'react';
import { AuthContext } from '../component/Context/AuthProvider';

const UseAuth = () => {
    return useContext(AuthContext);
}

export default UseAuth;