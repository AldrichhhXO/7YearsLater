import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'

import Admin from './Pages/Admin/Admin'
import Dashboard from './Pages/Admin/Dashboard/Dashboard'

import RSVP from './Pages/RSVP/RSVP'
import Questionaire from './Pages/Questionaire/Questionaire'

import Success from './Pages/Success/Success'
import Error from './Pages/Error/Error'


function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Landing />}/>

        {/** RSVP Route */}
        <Route exact path = "/rsvp" render = {(props) => <RSVP {...props} /> } />
        <Route exact path = "/rsvp/qa" render = {(props) => <Questionaire {...props}/> } />
        <Route exact path = "/rsvp/success" render = {() => <Success />} />

        {/** Admin Routes */}
        <Route exact path = "/admin" render = {() => <Admin />}/>
        <Route exact path = "/dashboard" render  = {() => <Dashboard />} />

        
        <Route path = "*" render  ={() => <Error />} />
      </Switch>
    </Router>
  );
}

export default App;
