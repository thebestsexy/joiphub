import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Hub from './components/pages/Hub'
import JoipHub from './components/joip/JoipHub'
import SsbuJoip from './components/joip/SsbuJoip'
import UtilityHub from './components/utils/UtilityHub'
import DieRoller from './components/utils/DieRoller'
import About from './components/pages/About'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="App">
            <div className="container">
              <Switch>
                <Route exact path="/joiphub/" component={Hub} />
                <Route exact path="/joiphub/joip/" component={JoipHub} />
                <Route exact path="/joiphub/joip/ssbujoip" component={SsbuJoip} />
                <Route exact path="/joiphub/utils/" component={UtilityHub} />
                <Route exact path="/joiphub/utils/dieroller" component={DieRoller} />
                <Route exact path="/joiphub/about" component={About} />
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    )
  }
}
