import React from 'react'
import {useSelector, useDispatch} from "react-redux";

const selectPipeXOffset = state => state.piping.x_offset
// const selectPipeYOffset = state => state.piping.y_offset
const selectPipeHeights = state => state.piping.heights
const selectPipeSpace = state => state.piping.height_space


export default function Pipe(props) {

    const x_offset = useSelector(selectPipeXOffset)[props.i]
    // const y_offset = useSelector(selectPipeYOffset)[props.i]
    const height = useSelector(selectPipeHeights)[props.i]
    const space = useSelector(selectPipeSpace)


    let style_upper = {
        transform: `translate(${x_offset}px, 0px)`,
        height: `${height}px`
    }

    let style_down = {
        transform: `translate(${x_offset}px, ${height+space}px)`,
        height: `100%`
    }

    return (
        <div>
            <div className={"pipe-flappy-bird"} style={style_upper}/>
            <div className={"pipe-flappy-bird"} style={style_down}/>
        </div>
    )
}
