/* eslint-disable eqeqeq */
/* eslint-disable no-eval */
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import GameStandard from './pages/GameStandard'
import GameSurvival from './pages/GameSurvival'

const useStyles = makeStyles(theme => ({
  main: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196f3',
  }
}))


function App() {
  const classes = useStyles()
  return (
    <Router>
      <div className={classes.main}>
        <Switch>
          <Route path="/standard">
            <GameStandard />
          </Route>
          <Route path="/survival">
            <GameSurvival />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
