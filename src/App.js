import './App.css';
import Home from './Components/Home'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Buisness from './Pages/Buisness'
import Politics from './Pages/Politics'
import Health from './Pages/Health'
import Sports from './Pages/Sports'
import Tech from './Pages/Tech'
import Form from './Components/Form'




function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/Politics' component={Politics} />
          <Route path='/buisness' component={Buisness} />
          <Route path='/health' component={Health} />
          <Route path='/tech' component={Tech} />
          <Route path='/sports' component={Sports} />
          <Route path='/form' component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
