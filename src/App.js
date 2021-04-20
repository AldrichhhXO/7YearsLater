import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'

import Admin from './Pages/Admin/Admin'
import Dashboard from './Pages/Admin/Dashboard/Dashboard'
import GuestList from './Pages/Admin/GuestList/GuestList'
import Results from './Pages/Admin/Results/Results'

import RSVP from './Pages/RSVP/RSVP'
import Questionaire from './Pages/Questionaire/Questionaire'

import Success from './Pages/Success/Success'
import Error from './Pages/Error/Error'

import Spinner from './Pages/Spinner/Spinner'

function App(props) {

  let check = "RebojaDorsey"

  let dashUrl = `/u/${check}/dashboard`
  let guestUrl = `u/${check}/dashboard`

  return (
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Landing />}/>

        {/** RSVP Route */}
        <Route exact path = "/rsvp" render = {(props) => <RSVP {...props} /> } />
        <Route exact path = "/rsvp/qa" render = {(props) => <Questionaire {...props}/> } />
        <Route exact path = "/rsvp/success" render = {(props) => <Success {...props}/>} />

        {/** Admin Routes */}
        <Route exact path = "/admin" render = {() => <Admin />}/>
        <Route exact path = {dashUrl} render  = {() => <Dashboard />} />  
        <Route exact path = "/u/:name/guestlist" render = {() => <GuestList />} />   
        <Route exact path = "/u/:name/results" render = {() => <Results />} />  

        <Route exact path = "/spinner" render = {() => <Spinner welcome = "Ready the shot glasses"/>} />   
        <Route exact path = "/spinners" render = {() => <Spinner welcome = "Choose your liquor"/>} />   
        <Route path = "*" render  ={() => <Error />} />
      </Switch>
    </Router>
  );
}

export default App;
