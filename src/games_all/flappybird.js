import React from "react";
import Bird from "./flappybird/bird";
import { Provider } from 'react-redux'


export default function FlappyBird() {

    return (
        <Provider store={}>
            <div className={"flappy-bird"}>
                <Bird />
            </div>
        </Provider>
    )
}
