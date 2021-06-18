import React from 'react';
import Canvas from './polar_coordinates/canvas';

export default function PolarCoordinates() {


    const draw = (ctx, data) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.beginPath()
        ctx.lineWidth = 2.2;

        let r = 200;

        for (let a=0; a < Math.PI*2; a+=0.5){
            let x = r * Math.cos(a)
            let y = r * Math.sin(a)
            ctx.lineTo(x,y)
        }
        ctx.closePath()
        ctx.stroke();
    }


    return (
        <div className={"polar-coordinates-screen"}>
            <p>Test</p>
            <Canvas draw={draw}/>
        </div>
    );
}
