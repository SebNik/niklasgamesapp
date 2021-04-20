import React from 'react'
import {useSelector, useDispatch} from "react-redux";

const selectHeight = state => state.bird.height

export default function Bird() {

    const height = useSelector(selectHeight)

    const dispatch = useDispatch()

    let style = {
        transform: `translate(0, ${height}px)`
    }


    return (
        <div className={"bird-flappy-bird"} style={style}/>
    )
}
