import { Router, Redirect } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

function PrivateRoute({ children, ...rest }) {
   
   let {user} = UseAuth();
    return (
      <Router
        {...rest}
        render={({ location }) =>
         user.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute;