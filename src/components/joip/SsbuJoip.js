import React, { Component } from 'react'

export default class SsbuJoip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            started: false,
            btnTypes: [
                "increase", "roll", "snake", "ladder", "jump", "lottery"
            ],
            characters: [
                {
                    name: "Bowsette",
                    type: "fdom",
                    style: "norm",
                },
                {
                    name: "Samus",
                    type: "norm",
                    style: "norm",
                },
                {
                    name: "Zero Suit Samus",
                    type: "norm",
                    style: "fast",
                },
                {
                    name: "Dark Samus",
                    type: "fdom",
                    style: "norm",
                },
                {
                    name: "Peach",
                    type: "fsub",
                    style: "norm",
                },
                {
                    name: "Daisy",
                    type: "norm",
                    style: "sass",
                },
                {
                    name: "Rosalina",
                    type: "fsub",
                    style: "dual",
                },
                {
                    name: "Zelda",
                    type: "fsub",
                    style: "transition",
                },
                {
                    name: "Sheik",
                    type: "fdom",
                    style: "transition",
                },
                {
                    name: "Isabelle",
                    type: "fsub",
                    style: "norm",
                },
                {
                    name: "Palutena",
                    type: "norm",
                    style: "loose",
                },
                {
                    name: "Wii Fit Trainer",
                    type: "norm",
                    style: "stamina",
                },
                {
                    name: "Bayonetta",
                    type: "fdom",
                    style: "tight",
                },
                {
                    name: "Lucina",
                    type: "norm",
                    style: "norm",
                },
                {
                    name: "Byleth",
                    type: "norm",
                    style: "norm",
                },
                {
                    name: "Robin",
                    type: "norm",
                    style: "slow",
                },
                {
                    name: "Corrin",
                    type: "norm",
                    style: "twist",
                },
            ],
            stages: [
                {
                    character: "python",
                    imgurl: "https://i.imgur.com/nhX3VEW.jpeg",
                    name: "starter image",
                    body: "delete in production",
                    stroke: {
                        text: "Stroke Text",
                        type: "none",
                        max: 0,
                        min: 0,
                        mult: 1,
                    },
                    btnType: "increase",
                },
                {
                    character: "Bowsette",
                    imgurl: "https://i.imgur.com/abj7aQX.png",
                    name: "bowsette is fire",
                    body: "This is meant to be started with clothes on and without having jerked off. If you are already naked or have been jerking off in any way today then come back tomorrow. If you only remember one instruction it is this: follow the given instructions. It is that simple. Keep in mind there will be variations of stroking. Speed (very slow, slow, medium, fast, and very fast). Grip strength (soft, normal, and tight). Along with other variations, but why spoil all the surprises. If no specific instructions are given, then just normal grip and medium speed. You can click the button at the bottom or the images to go to the next stage.Last, but certainly not least, you are NOT allowed to cum until the end. If you start to cum when you are not allowed you MUST ruin it and try again tomorrow. Can you last? Good luck!",
                    stroke: {
                        text: "",
                        type: "none",
                        max: 0,
                        min: 0,
                        mult: 1,
                    },
                    btnType: "increase",
                },
                {
                    character: "Bowsette",
                    imgurl: "https://i.imgur.com/TOKpyDF.jpg",
                    name: "bowsette in charge",
                    body: "So you're here to try your hand against the SSBU crew huh? Thankfully I get to toy with you before you can get to them.",
                    stroke: {
                        text: "Let's warm things up a bit slower and give me ",
                        type: "stroke",
                        max: 15,
                        min: 5,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Bowsette",
                    imgurl: "https://i.imgur.com/ctMvGHy.jpg",
                    name: "bowsette power squat",
                    body: "Getting excited quickly I hope?",
                    stroke: {
                        text: "Fuck stroke it for me, ",
                        type: "stroke",
                        max: 20,
                        min: 10,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Bowsette",
                    imgurl: "https://i.imgur.com/piHo6Yy.jpg",
                    name: "bowsette lean back",
                    body: "I really don't think you're ready for this.",
                    stroke: {
                        text: "",
                        type: "stroke",
                        max: 35,
                        min: 25,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Bowsette",
                    imgurl: "https://i.imgur.com/Pak4XcX.jpg",
                    name: "bowsette strong arm",
                    body: "",
                    stroke: {
                        text: "Tighten your grip just a bit, and give me ",
                        type: "stroke",
                        max: 25,
                        min: 15,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Bowsette",
                    imgurl: "https://i.imgur.com/ddcfSKX.jpg",
                    name: "bowsette with popsicle",
                    body: "You frustrated that you still have clothes on?",
                    stroke: {
                        text: "Focus on my clothes, or lack thereof, and give yourself ",
                        type: "stroke",
                        max: 40,
                        min: 25,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Bowsette",
                    imgurl: "https://i.imgur.com/3f1l1VT.jpg",
                    name: "bowsette power pose",
                    body: "Alright I've had my fun with you... for now.",
                    stroke: {
                        text: "Before you go to the first contender, ",
                        type: "stroke",
                        max: 50,
                        min: 35,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Lucina",
                    imgurl: "https://i.imgur.com/DTN4v3l.jpg",
                    name: "lucina swimwear and watermelon popsicle",
                    body: "I'm the first you come to? Well you sure know how to make a girl feel special. I can't wait to see that cock, but I want to enjoy seeing you squirm just a bit.",
                    stroke: {
                        text: "Stroke very slowly for ",
                        type: "stroke",
                        max: 20,
                        min: 10,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Lucina",
                    imgurl: "https://i.imgur.com/S3H4WIm.jpg",
                    name: "lucina ripped clothes",
                    body: "Woops, seems my clothes got a bit torn up in the last battle!",
                    stroke: {
                        text: "Imagine ripping my clothes up, ripping away your pants, and give yourself ",
                        type: "stroke",
                        max: 40,
                        min: 25,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Lucina",
                    imgurl: "https://i.imgur.com/MTPxC2g.png",
                    name: "lucina sitting up",
                    body: "Well, I don't see any point in wearing torn up clothes, and neither should you. Go ahead and slowly take off all your clothes.",
                    stroke: {
                        text: "Don't lube up just yet, once you are completely naked stare at my tits and give each ",
                        type: "stroke",
                        max: 35,
                        min: 25,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Lucina",
                    imgurl: "https://i.imgur.com/lvvhlsZ.jpg",
                    name: "lucina nude",
                    body: "I think I have teased you enough don't you?",
                    stroke: {
                        text: "Use some sort of lubricant and tease the tip of that cock for ",
                        type: "stroke",
                        max: 60,
                        min: 50,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Lucina",
                    imgurl: "https://i.imgur.com/EScdSkL.jpg",
                    name: "lucina face down ass up",
                    body: "Oh fuck I can't stand it any longer, I want that dick inside me",
                    stroke: {
                        text: "Stroke very fast and give my slutty pussy ",
                        type: "stroke",
                        max: 25,
                        min: 15,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Lucina",
                    imgurl: "https://i.imgur.com/lt80qQR.png",
                    name: "lucina penetration on top",
                    body: "Oh please go slow.",
                    stroke: {
                        text: "Tighten your grip and slowly stroke, imagine penetrating my tight hole, ",
                        type: "stroke",
                        max: 15,
                        min: 10,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Lucina",
                    imgurl: "https://i.imgur.com/KXjdryw.jpg",
                    name: "lucina riding",
                    body: "Alright, I think I'm ready for more.",
                    stroke: {
                        text: "Keep that tight grip, but stroke a bit quicker for ",
                        type: "stroke",
                        max: 35,
                        min: 25,
                        mult: 5,
                    },
                    btnType: "increase",
                },
                {
                    character: "Lucina",
                    imgurl: "https://i.imgur.com/KXjdryw.jpg",
                    name: "lucina riding",
                    body: "Alright, I think I'm ready for more.",
                    stroke: {
                        text: "Keep that tight grip, but stroke a bit quicker for ",
                        type: "stroke",
                        max: 35,
                        min: 25,
                        mult: 5,
                    },
                    btnType: "increase",
                },
            ]
        }
        this.increaseCounter = this.increaseCounter.bind(this)
        this.setRandomInt = this.setRandomInt.bind(this)
    }

    async increaseCounter() {
        if (this.state.stages.length - 1 > this.state.counter) {
            await this.setState({ counter: this.state.counter + 1 })
        }
    }

    async setRandomInt(max, min, mult) {
        max = Math.floor(max)
        min = Math.ceil(min)
        await this.setState({
            counter: ((Math.floor(
                Math.random() * ((max / mult) - (min / mult) + 1)) + min) * mult)
        })
    }

    render() {
        const { counter, stages } = this.state

        function getRandomInt(max, min, mult) {
            max = Math.floor(max)
            min = Math.ceil(min)
            return ((Math.floor(Math.random() * ((max / mult) - (min / mult) + 1)) + (min / mult)) * mult)
        }

        function renderStroke(max, min, mult) {
            switch (stages[counter].stroke.type) {
                case "stroke":
                    return ` ${getRandomInt(max, min, mult)} strokes`
                case "edge":
                    var edgeCount = getRandomInt(max, min, mult)
                    if (edgeCount === 1) {
                        var edgeText = "edge"
                    }
                    else {
                        edgeText = "edges"
                    }
                    return ` ${edgeCount} ${edgeText}`
                case "time":
                    var timeAmnt = getRandomInt(max, min, mult)
                    if (timeAmnt === 1) {
                        var timeText = "minute"
                    }
                    else {
                        timeText = "minutes"
                    }
                    return ` ${timeAmnt} ${timeText}`
                case "none":
                    return ""
                default:
                    return ""
            }
        }

        const renderButton = () => {
            switch (stages[counter].btnType) {
                case "increase":
                    return (
                        <div>
                            <div className="col-12">
                                <img
                                    className="mt-2"
                                    src={stages[counter].imgurl}
                                    alt={stages[counter].name}
                                    onClick={this.increaseCounter}
                                />
                            </div>
                            <button onClick={this.increaseCounter} className="btn btn-primary">Next Stage</button>
                        </div>
                    )
                case "roll":
                    return ""
                case "snake":
                    return ""
                case "ladder":
                    return ""
                case "jump":
                    return ""
                case "lottery":
                    return ""
                default:
                    return ""
            }
        }

        return (
            <div className="game">
                <h1 className="display-4">{this.state.counter}</h1>
                <div className="">
                    <p className="lead mb-2">{stages[counter].body}</p>
                    {/* stroke/edge counter */}
                    <p className="lead mb-2">{stages[counter].stroke.text}{renderStroke(stages[counter].stroke.max, stages[counter].stroke.min, stages[counter].stroke.mult)}</p>
                </div>
                {renderButton()}
                <p className="display-4">{counter}</p>
            </div>
        )
    }
}
