import React from "react";
import {useRouteMatch} from 'react-router-dom'

const generatePage = page => {
    const component = () => require(`../games/${page}`).default

    try {
        return React.createElement(component())
    } catch (err) {
        console.warn(err)
        return React.createElement(() => 404)
    }
}

export default function GameRenderer() {
    const {
        params: {page}
    } = useRouteMatch()

    return generatePage(page)
}
