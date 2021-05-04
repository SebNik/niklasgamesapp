import React from 'react'
import Pipe from "./pipe";
import {useSelector} from "react-redux";

const selectPipeData = state => state.piping


export default function Piping() {

    const data = useSelector(selectPipeData)

    return (
        <div className={"piping-flappy-bird"}>
            {data.heights.map((d, index) => (
                <Pipe i={index} />
            ))}
        </div>
    )
}
