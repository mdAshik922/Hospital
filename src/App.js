
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
     <Router>
     <Switch>

<Route exact path='/'>
<Home></Home>
</Route>
<Route  path='home'>
<Home></Home>
</Route>
<Route  path='/'>
<Home></Home>
</Route>
<Route  path='*'>

</Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
