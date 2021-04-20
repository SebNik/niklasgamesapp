import React from 'react'
import {useSelector, useDispatch} from "react-redux";

const selectGameStatus = state => state.game.status

export default function Menu() {

    const statusGame = useSelector(selectGameStatus)
    const dispatch = useDispatch()

    const newGame = () => {
        dispatch({type: 'game/new_game'})
    }

    return (
        <div className={"menu-flappy-bird"}>
            <button onClick={newGame}>New Game</button>
        </div>
    )
}
