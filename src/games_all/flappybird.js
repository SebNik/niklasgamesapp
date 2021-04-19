import React from "react";
import Bird from "./flappybird/bird";
import { Provider } from 'react-redux'
import store from "./flappybird/store/flappybird_store.js"


export default function FlappyBird() {

    console.log('Initial state: ', store.getState())
    store.dispatch({ type: 'bird/falling' })


    return (
        // <Provider store={store}>
        <div className={"flappy-bird"}>
            <Bird />
            <button onClick={() => console.log(store.getState())} > Get the current state </button>
        </div>
        // </Provider>
    )
}
