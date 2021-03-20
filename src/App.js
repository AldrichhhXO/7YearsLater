import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'

import Admin from './Pages/Admin/Admin'
import Dashboard from './Pages/Admin/Dashboard/Dashboard'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Landing />}/>

        {/** Admin Routes */}
        <Route exact path = "/admin" render = {() => <Admin />}/>
        <Route exact path = "/admin/dashboard" render  = {() => <Dashboard />} />
      </Switch>
    </Router>
  );
}

export default App;
