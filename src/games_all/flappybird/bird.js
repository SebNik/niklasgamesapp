import React, { useState } from 'react'

export default function Bird(props) {

    let { status, height = 0, isFlying } = props

    let style = {
        transform: `translate(0, ${-height}px)`
    }

    return (
        <div className={"bird-flappy-bird"} style={style}/>
    )
}
