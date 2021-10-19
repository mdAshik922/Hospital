import { Router, Redirect } from "react-router-dom";

import UseFirebase from "../../Hooks/UseFirebase";

function PrivateRoute({ children, ...rest }) {
   
   let {user} = UseFirebase();
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