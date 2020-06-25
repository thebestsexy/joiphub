import React, { Component, Fragment } from 'react'

export default class DieRoller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roll: 0
        }
        this.roll = this.roll.bind(this)
        this.getRandomInt = this.getRandomInt.bind(this)
    }

    async roll() {
        await this.setState({ roll: (Math.floor(Math.random() * (6)) + 1) })
    }

    async getRandomInt(min, max, mult) {
        min = Math.ceil(min)
        max = Math.floor(max)
        await this.setState({
            roll: ((Math.floor(
                Math.random() * ((max / mult) - min + 1)) + min) * mult)
        })
    }

    render() {
        const { roll } = this.state

        const initial = (
            <Fragment>

            </Fragment>
        )
        const rolled = (
            <Fragment>
                <div className="display-4">{roll}</div>
            </Fragment>
        )

        return (
            <div className="game">
                <h1 className="display-4">Die Roller</h1>
                <button
                    className="btn btn-primary"
                    onClick={() => this.getRandomInt(1, 6, 1)}
                >
                    Roll Die
                </button>
                {roll === 0 ? initial : rolled}
            </div>
        )
    }
}
