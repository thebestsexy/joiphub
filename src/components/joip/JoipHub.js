import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class JoipHub extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4">JOIP List</h1>
                <Link to="/joiphub/joip/ssbujoip/" className="btn btn-primary">
                    SSBU JOIP
                </Link>
            </Fragment>
        )
    }
}
