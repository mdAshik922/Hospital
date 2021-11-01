import { Route, Redirect } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

function PrivateRoute({ children, ...rest }) {
  const {user , isLoading}= UseAuth();

  if(isLoading) {
      return "loading"
  }

   return (
       <div>
        
          <Route
           {...rest}
           
           render={({ location }) => user.email ? children : <Redirect
               to={{
                   pathname: "/login",
                   state: { from: location }
               }}
           ></Redirect>}
       >

       </Route>
       
       </div>
   );
  }
  export default PrivateRoute;