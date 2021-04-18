import React from "react";
import Bird from "./flappybird/bird";
import { Provider } from 'react-redux'
import configureStore from "./flappybird/store/flappybird_store"

const store = configureStore()

export default function FlappyBird() {

    return (
        <Provider store={store}>
            <div className={"flappy-bird"}>
                <Bird />
            </div>
        </Provider>
    )
}
