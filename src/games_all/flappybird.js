import React from "react";
import Bird from "./flappybird/bird";
import {Provider, useSelector} from 'react-redux'
import store from "./flappybird/store/flappybird_store.js"
import Menu from "./flappybird/menu";




export default function FlappyBird() {
    console.log('The FlappyBird game was started.')
    console.log('Initial state: ', store.getState())

    const statusGame = store.getState().status

    setInterval(() => {
        if (store.getState().status === "playing") {
            store.dispatch({type: 'bird/falling'})
        }
    }, 20)

    const handler = () => {
        console.log("Fly UP !!")
        store.dispatch({type: 'bird/flyup'})
    }


    function Game() {
        if (statusGame === 'playing') {
            return (
                <Bird/>
            )
        } else if (statusGame === 'menu') {
            return (
                <Menu/>
            )
        }
    }

    // TODO get the interval cleared depending on the current state
    // componentDidMount(){
    //     let intervalId = setInterval(this.yourFunction, 1000)
    //     this.setState({ intervalId: intervalId })
    // }
    //
    // componentWillUnmount(){
    //     clearInterval(this.state.intervalId)
    // }

    return (
        <Provider store={store}>
            <div onClick={handler} className={"screen-flappy-bird"} id={"game"}>
                <Game/>
            </div>
        </Provider>
    )
}
