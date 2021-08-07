import React from 'react'
import {useSelector} from "react-redux";

import BirdHigh from "../../../assets/images/flappy_bird/Bird_hoch.png"
import BirdLow from "../../../assets/images/flappy_bird/Bird_runter.png"

const selectHeight = state => state.bird.height
const selectSpeed = state => state.bird.speed_y


export default function Bird() {

    const height = useSelector(selectHeight)
    const speed = useSelector(selectSpeed)

    let bird_image = BirdHigh
    let angle = speed * -60 / -10

    if (speed < 0) {
        bird_image = BirdLow
    }

    let style = {
        backgroundImage: `url(${bird_image})`,
        transform: `translate(0, ${height}px) rotate(${angle}deg)`,
    }


    return (
        <div className={"bird-flappy-bird"} style={style}/>
    )
}
