import React, { useState } from 'react'

export default function Bird() {

    const [height, setHeight] = useState(0);

    let style = {
        transform: `translate(0, ${-height}px)`
    }

    return (
        <div className={"bird-flappy-bird"} style={style}/>
    )
}
