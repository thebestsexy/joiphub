import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class Hub extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4">JOIP Hub</h1>
                <Link
                    to="/joiphub/joip/"
                    className="btn btn-primary"
                >
                    JOIP
                </Link>
                <Link
                    to="/joiphub/utils/"
                    className="btn btn-primary"
                >
                    Utilities
                </Link>
                <Link
                    to="/joiphub/about/"
                    className="btn btn-primary"
                >
                    About
                </Link>
            </Fragment>
        )
    }
}
