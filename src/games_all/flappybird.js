import React from "react";
import Bird from "./flappybird/bird";
import { Provider } from 'react-redux'
import store from "./flappybird/store/flappybird_store.js"


export default function FlappyBird() {

    console.log('Initial state: ', store.getState())
    store.dispatch({ type: 'bird/falling' })

    const handler = () => {
        console.log("Fly UP !!")
        store.dispatch({ type: 'bird/flyup' })
    }

    return (
        <Provider store={store}>
            <div onClick={handler} className={"flappy-bird"} id={"game"}>
                <Bird />
            </div>
        </Provider>
    )
}
