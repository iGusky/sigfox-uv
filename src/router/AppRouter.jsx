import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Historial from '../components/Historial'
import Navigation from '../components/Navigation'
import Principal from '../components/Principal'

const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/historial" component={Historial} />
        <Redirect to="/" /> 
      </Switch> 
    </Router>
  )
}

export default AppRouter
