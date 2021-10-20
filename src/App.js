
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Service from './component/Service/Service';
import Login from './LoginAngSignUp/Login';
import SignUp from './LoginAngSignUp/SignUp';
import Blog from './component/Blog/Blog';
import Support from './component/Support/Support';
import PrivateRoute from './component/Route/PrivateRoute';
import AuthProvider from './component/Contex/AuthProvider';
import Appointment from './component/Appointment/Appointment';
import ServiceDetail from './component/ServiceDetails/ServiceDetail';
function App() {
  return (
    <div className="App">
      {/* router use */}
      <AuthProvider>
     <Router>
       <Header></Header>
     <Switch>
<Route exact path='/'>
<Home></Home>
</Route>
<Route  path='/home'>
<Home></Home>
</Route>
<Route  path='/service'>
<Service></Service>
</Route>
<PrivateRoute  path='/blog'>
<Blog></Blog>
</PrivateRoute>
<Route  path='/support'>
<Support></Support>
</Route>
<PrivateRoute  path='/appointment'>
<Appointment></Appointment>
</PrivateRoute>
<Route  path='/login'>
<Login></Login>
</Route>
<Route  path='/servicecart/:serviceId'>
<ServiceDetail></ServiceDetail>
</Route>
<Route  path='/signup'>
<SignUp></SignUp>
</Route>
<Route  path='*'>
<NotFound></NotFound>
</Route>
     </Switch>
     <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
