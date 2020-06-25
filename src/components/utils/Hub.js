import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import UtilityHub from './UtilityHub'
import DieRoller from './DieRoller'

export default class Hub extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/joiphub/utils/" component={UtilityHub} />
                        <Route exact path="/joiphub/utils/dieroller/" component={DieRoller} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}
