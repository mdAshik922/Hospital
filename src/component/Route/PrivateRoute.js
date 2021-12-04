import { Spinner } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';
import UseAuth from "../../Hooks/UseAuth";

function PrivateRoute({ children, ...rest }) {
    let location = useLocation();
    const { user,  isLoading } = UseAuth();
    if (isLoading) { return <Spinner /> };
    if(user.email){
        return children;
    };

    return <Navigate to="/login" state={{from: location}} />
};
  export default PrivateRoute;