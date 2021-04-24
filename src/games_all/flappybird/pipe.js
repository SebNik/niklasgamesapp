import React from 'react'
import {useSelector, useDispatch} from "react-redux";

const selectPipeXOffset = state => state.piping.x_offset
const selectPipeYOffset = state => state.piping.y_offset

export default function Pipe(props) {

    const x_offset = useSelector(selectPipeXOffset)[props.i]
    const y_offset = useSelector(selectPipeYOffset)[props.i]


    const dispatch = useDispatch()

    let style = {
        transform: `translate(${x_offset}px, ${y_offset}px)`
    }

    return (
        <div className={"pipe-flappy-bird"} style={style}/>
    )
}
