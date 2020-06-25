import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import JoipHub from './JoipHub'
import Test from './TestJoip'

export default class Hub extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/joiphub/joip/" component={JoipHub} />
                        <Route exact path="/joiphub/joip/test/" component={Test} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}
