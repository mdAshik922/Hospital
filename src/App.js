
import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
import AuthProvider from './component/Context/AuthProvider';
import Appointment from './component/Appointment/Appointment';
import ServiceDetail from './component/ServiceDetails/ServiceDetail';

function App() {
  return (
    <div className="App">
      {/* router use */}
      <AuthProvider>
     <BrowserRouter>
       <Header></Header>
     <Routes>
<Route exact path='/' element={<Home></Home>} />

<Route  path='/home' element={<Home></Home>} />

<Route  path='/support' element={<Support></Support>} />

<Route  path='/service' element={<Service></Service>} />

<Route  path='/ServiceDetail/:id' element={<ServiceDetail></ServiceDetail>} />

<Route  path='/appointment' element={<PrivateRoute><Appointment/></PrivateRoute>} />

<Route  path='/blog' element={<PrivateRoute><Blog/></PrivateRoute>} />

<Route  path='/login'  element={<Login></Login>} />

<Route  path='/signup' element={<SignUp></SignUp>} />

<Route  path='*' element={<NotFound></NotFound>} />


     </Routes>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
