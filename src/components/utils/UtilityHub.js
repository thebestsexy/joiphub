import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class UtilityHub extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4">JOIP Utilities</h1>
                <Link to="/joiphub/utils/dieroller" className="btn btn-primary">
                    Die Roller
                </Link>
            </Fragment>
        )
    }
}
