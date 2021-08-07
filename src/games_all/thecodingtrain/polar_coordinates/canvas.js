import React, {useEffect, useRef} from 'react'

const Canvas = props => {

    const {draw, settings} = props
    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current

        const width = parseInt(getComputedStyle(document.getElementById("canvas-drawing-space")).getPropertyValue("width").replace("px", ""))
        const height = parseInt(getComputedStyle(document.getElementById("canvas-drawing-space")).getPropertyValue("height").replace("px", ""))

        canvas.width = width
        canvas.height = height
        const context = canvas.getContext('2d')

        context.translate(width/2, height/2)

        draw(context, settings)
    }, [draw, settings])

    return (
        <div className={"polar-coordinates-canvas"} id={"canvas-drawing-space"}>
            <canvas ref={canvasRef}/>
        </div>
    )
}

export default Canvas
