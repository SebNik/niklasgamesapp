import React from 'react';
import Canvas from './polar_coordinates/canvas';

export default function PolarCoordinates() {


    const draw = (ctx, data) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.beginPath()
        ctx.lineWidth = 2.2;

        let r = 200;

        for (let a=0; a < Math.PI*2; a+=0.1){
            let r1 = r + Math.floor(Math.random() * (50 - -50) ) + -50;
            let x = r1 * Math.cos(a);
            let y = r1 * Math.sin(a);
            ctx.lineTo(x,y);
        }
        ctx.closePath();
        ctx.stroke();
    }


    return (
        <div className={"polar-coordinates-screen"}>
            <p>Test</p>
            <Canvas draw={draw}/>
        </div>
    );
}
