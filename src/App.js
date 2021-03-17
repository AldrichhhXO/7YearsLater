import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Landing />}/>
      </Switch>
    </Router>
  );
}

export default App;
