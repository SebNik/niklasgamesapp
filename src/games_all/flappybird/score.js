import React from 'react'
import {useSelector} from "react-redux";

const selectScore = state => state.game.score

export default function Score() {

    const score = useSelector(selectScore)

    return (
        <div className={"score-flappy-bird"}>
            <p>
            Score: {score}
            </p>
        </div>
    )
}
