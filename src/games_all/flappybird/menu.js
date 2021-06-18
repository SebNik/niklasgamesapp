import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import Score from './score';

const selectInterval = state => state.game.interval
const selectScore = state => state.game.score


export default function Menu() {

    const interval = useSelector(selectInterval)
    const score = useSelector(selectScore)

    const dispatch = useDispatch()

    const newGame = () => {

        let intervalId = setInterval(() => {
            dispatch({type: 'game/update'})
            dispatch({type: 'bird/falling'})
            dispatch({type: 'piping/update'})
        }, interval)
        dispatch({type: 'piping/add_new'})
        dispatch({type: 'game/new_game', payload: intervalId})

    }

    return (
        <div className={"menu-flappy-bird"}>
            <button onClick={newGame}>New Game</button>
            <p>Score: {score}</p>
        </div>
    )
}
