import React from "react";
import {useRouteMatch} from 'react-router-dom'

const generatePage = game => {
    const component = () => require(`./${game}`).default

    try {
        return React.createElement(component())
    } catch (err) {
        console.warn(err)
        return React.createElement(() => 404)
    }
}

export default function GameRenderer() {
    const {
        params: {game}
    } = useRouteMatch()

    return generatePage(game)
}
