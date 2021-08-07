import React from "react";
import Score from "./flappybird/score";
import Bird from "./flappybird/bird";
import {Provider, useSelector} from 'react-redux'
import store from "./flappybird/store/flappybird_store.js"
import Menu from "./flappybird/menu";
import Piping from "./flappybird/piping";
import Floor from "./flappybird/floor";


const selectStatusGame = state => state.game.status

export default function FlappyBird() {
    console.log('The FlappyBird game was started.')
    console.log('Initial state: ', store.getState())

    const handler = () => {
        console.log("Fly UP !!")
        store.dispatch({type: 'bird/fly_up'})
    }

    function Game() {
        const statusGame = useSelector(selectStatusGame)

        if (statusGame === 'playing') {
            return (
                <div onClick={handler} className={"screen-flappy-bird"} id={"game-screen-flappy-bird"}>
                    <Bird/>
                    <Piping/>
                    <Score></Score>
                </div>
        )
        } else if (statusGame === 'menu') {
            return (
                <div className={"screen-flappy-bird"} id={"game-screen-flappy-bird"}>
                    <Menu/>
                </div>
            )
        }
    }

    return (
        <Provider store={store}>
            <div className={"window-flappy-bird"} id={"main-flappy-bird"}>
                <Game/>
                <Floor/>
            </div>
        </Provider>
    )
}
