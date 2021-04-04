import './App.css';
import Home from './Components/Home'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Buisness from './Pages/Buisness'
import General from './Pages/General'
import Health from './Pages/Health'
import Sports from './Pages/Sports'
import Entertainment from './Pages/Entertainment'
import SignUpLogIn from './Pages/SignUpLogIn'




function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/General' component={General} />
          <Route path='/buisness' component={Buisness} />
          <Route path='/health' component={Health} />
          <Route path='/entertainment' component={Entertainment} />
          <Route path='/sports' component={Sports} />
          <Route path='/logInSignUp' component={SignUpLogIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
