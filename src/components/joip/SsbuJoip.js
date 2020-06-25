import React, { Component, Fragment } from 'react'

export default class SsbuJoip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            started: false,
            btnTypes: [
                "increase", "roll", "snake", "ladder", "jump"
            ],
            characters: [
                "Bowsette", "Samus", "Peach", "Daisy", "Zelda",
                "Sheik", "Lucina", "ZSS", "Wii Fit Trainer", "Rosalina",
                "Palutena", "Bayonetta", "Isabelle", "Byleth"
            ],
            images: [
                {
                    character: "Bowsette",
                    imgurl: "https://i.imgur.com/TOKpyDF.jpg",
                    name: "bowsette in charge",
                    body: "Change to instructions",
                    btnType: "increase",
                },
                {
                    character: "Bowsette",
                    imgurl: "https://i.imgur.com/ddcfSKX.jpg",
                    name: "bowsette with popsicle",
                    body: "Change to instructions",
                    btnType: "increase",
                },
                {
                    character: "Bowsette",
                    imgurl: "https://i.imgur.com/ctMvGHy.jpg",
                    name: "bowsette power squat",
                    body: "Change to instructions",
                    btnType: "increase",
                },
                {
                    character: "Bowsette",
                    imgurl: "https://i.imgur.com/piHo6Yy.jpg",
                    name: "bowsette lean back",
                    body: "Change to instructions",
                    btnType: "increase",
                },
                {
                    character: "Bowsette",
                    imgurl: "https://i.imgur.com/Pak4XcX.jpg",
                    name: "bowsette strong arm",
                    body: "Change to instructions",
                    btnType: "increase",
                }
            ]
        }
        this.increaseCounter = this.increaseCounter.bind(this)
        this.getRandomInt = this.getRandomInt.bind(this)
    }

    async increaseCounter() {
        if (this.state.images.length - 1 > this.state.counter) {
            await this.setState({ counter: this.state.counter + 1 })
        }
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
        const { counter, images } = this.state

        const norm = (
            <Fragment>
                <p className="lead">Error, please message reddit user Fapper489</p>
            </Fragment>
        )
        const instructions = (
            <div className="col-12 mb-3">
                <h1 className="display-4">SSBU JOIP</h1>
                <ul className="list-unstyled">
                    <li className=""><h2>Instructions:</h2></li>
                    <li className="lead">
                        This is meant to be started with clothes on and without having jerked off.
                        If you are already naked or have been jerking off in any way today then come back tomorrow.
                    </li>
                    <li className="lead">
                        If you only remember one instruction it is this: follow the given instructions. It is that simple.
                    </li>
                    <li className="lead">
                        Keep in mind there will be variations of stroking. Speed (very slow, slow, medium, fast, and very fast). Grip strength (soft, normal, and tight). Along with other variations, but why spoil all the surprises.
                    </li>
                    <li className="lead">
                        You can click the button at the bottom or the images to go to the next stage.
                    </li>
                    <li className="lead">
                        Last, but certainly not least, you are NOT allowed to cum until the end. If you start to cum when you are not allowed you MUST ruin it and try again tomorrow.
                    </li>
                    <li className="lead">
                        Good luck!
                    </li>
                </ul>
            </div>
        )
        const stage1 = (
            <div className="col-12 mb-3">
                <p className="lead">{images[counter].body}</p>
                <img
                    src={images[counter].imgurl}
                    alt={images[counter].name}
                    onClick={this.increaseCounter}
                />
            </div>
        )
        const stage2 = (
            <div className="col-12 mb-3">
                <p className="lead">This is the {counter}nd img</p>
                <img
                    src={images[counter].imgurl}
                    alt={images[counter].name}
                    onClick={this.increaseCounter}
                />
            </div>
        )
        const stage3 = (
            <div className="col-12 mb-3">
                <p className="lead">This is the {counter}rd img</p>
                <img
                    src={images[counter].imgurl}
                    alt={images[counter].name}
                    onClick={this.increaseCounter}
                />
            </div>
        )
        const stage4 = (
            <div className="col-12 mb-3">
                <p className="lead">{counter}</p>
                <img
                    src={images[counter].imgurl}
                    alt={images[counter].name}
                    onClick={this.increaseCounter}
                />
            </div>
        )

        function renderSwitch() {
            switch (counter) {
                case 0:
                    return instructions
                case 1:
                    return stage1
                case 2:
                    return stage2
                case 3:
                    return stage3
                case 4:
                    return stage4
                default:
                    return norm
            }
        }
        return (
            <div className="game">
                <h1 className="display-4">{this.state.counter}</h1>
                <div className="col-12 mb-3">
                    <p className="lead">{counter}</p>
                    <p className="lead">{images[counter].body}</p>
                    <img
                        src={images[counter].imgurl}
                        alt={images[counter].name}
                        onClick={this.increaseCounter}
                    />
                </div>
                <button onClick={this.increaseCounter} className="btn btn-primary">Button</button>
            </div>
        )
    }
}
