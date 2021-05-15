import React from 'react'
import {useSelector} from "react-redux";

const selectPipeXOffset = state => state.piping.x_offset
const selectPipeHeights = state => state.piping.heights
const selectPipeSpace = state => state.piping.height_space
const selectGameHeight = state => state.game.game_height


export default function Pipe(props) {

    const x_offset = useSelector(selectPipeXOffset)[props.i]
    const height = useSelector(selectPipeHeights)[props.i]
    const space = useSelector(selectPipeSpace)
    const game_height = useSelector(selectGameHeight)


    let style_upper = {
        transform: `translate(${x_offset}px, 0px)`,
        height: `${height}px`
    }

    let style_down = {
        transform: `translate(${x_offset}px, ${height + space}px)`,
        height: `${game_height - (height + space) + 1}px`
    }

    return (
        <div>
            <div className={"pipe-upper-flappy-bird"} style={style_upper}/>
            <div className={"pipe-lower-flappy-bird"} style={style_down}/>
        </div>
    )
}
