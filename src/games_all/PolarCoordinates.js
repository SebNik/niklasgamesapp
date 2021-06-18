import React from 'react';
import Canvas from './polar_coordinates/canvas';

export default function PolarCoordinates() {


    const draw = (ctx, data) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.lineWidth = 2.2;
        function drawLine(x1, y1, x2, y2){
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
        }
        drawLine(0,0,100,100)
        ctx.stroke();
    }


    return (
        <div className={"polar-coordinates-screen"}>
            <p>Test</p>
            <Canvas draw={draw}/>
        </div>
    );
}
