import React, {useEffect, useRef} from 'react'

const Canvas = props => {

    const {draw, settings} = props
    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current

        canvas.width = parseInt(getComputedStyle(document.getElementById("canvas-drawing-space")).getPropertyValue("width").replace("px", ""))
        canvas.height = parseInt(getComputedStyle(document.getElementById("canvas-drawing-space")).getPropertyValue("height").replace("px", ""))
        const context = canvas.getContext('2d')

        draw(context, settings)
    }, [draw])

    return (
        <div className={"fractal_tree_canvas"} id={"canvas-drawing-space"}>
            <canvas ref={canvasRef}/>
        </div>
    )
}

export default Canvas
