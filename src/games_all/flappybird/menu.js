import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import store from "./store/flappybird_store";
import {checkIfDead} from '../flappybird'

const selectGameStatus = state => state.game.status
const selectInterval = state => state.game.interval

export default function Menu() {

    const statusGame = useSelector(selectGameStatus)
    const interval = useSelector(selectInterval)
    const dispatch = useDispatch()

    const newGame = () => {
        let intervalId = setInterval(() => {
            checkIfDead(store.getState())
            store.dispatch({type: 'bird/falling'})
            store.dispatch({type: 'bird/falling'})
        }, interval)

        dispatch({type: 'game/new_game', payload: intervalId})


    }

    return (
        <div className={"menu-flappy-bird"}>
            <button onClick={newGame}>New Game</button>
        </div>
    )
}
