import React from "react";
import Bird from "./flappybird/bird";
import {Provider, useSelector} from 'react-redux'
import store from "./flappybird/store/flappybird_store.js"
import Menu from "./flappybird/menu";
import Piping from "./flappybird/piping";


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
                <div onClick={handler} className={"screen-flappy-bird"}>
                    <Bird/>
                    <Piping/>
                </div>
            )
        } else if (statusGame === 'menu') {
            return (
                <div className={"screen-flappy-bird"}>
                    <Menu/>
                </div>
            )
        }
    }

    return (
        <Provider store={store}>
            <Game/>
        </Provider>
    )
}
