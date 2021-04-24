import React from 'react'
import Pipe from "./pipe";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const selectPipeData = state => state.piping


export default function Piping() {

    const data = useSelector(selectPipeData)

    function DrawPipes(data) {
        for (let i = 0; i < data.heights.length; i++) {
            <Pipe i={i}/>
        }
    }

    return (
        <div className={"piping-flappy-bird"}>
            {/*<Pipe i={0}/>*/}
            {/*<DrawPipes data={data}/>*/}
            {data.heights.map((d, index) => (
                <Pipe i={index} />
            ))}
        </div>
    )
}
