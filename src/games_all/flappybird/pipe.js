import React from 'react'
import {useSelector, useDispatch} from "react-redux";

const selectHeight = state => state.bird.height

export default function Pipe() {

    // const height = useSelector(selectHeight)
    //
    // const dispatch = useDispatch()
    //
    // let style = {
    //     transform: `translate(0, ${height}px)`
    // }

    return (
        <div className={"pipe-flappy-bird"}/>
    )
}
