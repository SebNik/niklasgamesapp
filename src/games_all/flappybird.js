import React from "react";
import Bird from "./flappybird/bird";
import { Provider } from 'react-redux'
import store from "./flappybird/store/flappybird_store.js"


export default function FlappyBird() {

    console.log('Initial state: ', store.getState())
    setInterval(() => {
        if (store.getState().game.status === "playing"){
            store.dispatch({type: 'bird/falling'})
        }
    }, 20)

    const handler = () => {
        console.log("Fly UP !!")
        store.dispatch({ type: 'bird/flyup' })
    }

    return (
        <Provider store={store}>
            <div onClick={handler} className={"screen-flappy-bird"} id={"game"}>
                <Bird />
            </div>
        </Provider>
    )
}
