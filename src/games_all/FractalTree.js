import React, { useRef, useEffect } from 'react'
import Canvas from "./FractalTree/canvas";


export default function FractalTree() {

    const draw = (ctx, test) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.beginPath()
        ctx.moveTo(0, 0);
        ctx.lineTo(150, test.test);
        ctx.stroke();
        ctx.fill()
    }
    return (
        <div className={"fractal_tree_screen"}>
            <Canvas draw={draw} settings={{test: 500}
            } height={"500px"} width={"500px"} test={200}/>
        </div>
    )
}
