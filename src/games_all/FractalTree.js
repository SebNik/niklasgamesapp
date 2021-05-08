import React, { useState } from 'react'
import Canvas from "./FractalTree/canvas";
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

export default function FractalTree() {

    const [depth, setDepth] = useState(15);
    const [length, setLength] = useState(150);
    const [fraction, setFraction] = useState(0.72);
    const [angle, setAngle] = useState(30);


    const draw = (ctx, data) => {
        var deg_to_rad = Math.PI / 180.0;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.beginPath()


        function drawLine(x1, y1, x2, y2, brightness){
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
        }

        function drawTree(x1, y1, angle, depth, len, f, a){
            if (depth !== 0){
                var x2 = x1 + (Math.cos(angle * deg_to_rad)  * len);
                var y2 = y1 + (Math.sin(angle * deg_to_rad)  * len);
                drawLine(x1, y1, x2, y2, depth);
                drawTree(x2, y2, angle - a, depth - 1, len * f, f, a);
                drawTree(x2, y2, angle + a, depth - 1, len * f, f, a);
            }
        }

        drawTree(500,600, -90, data.depth, data.start_length, data.fraction, data.angle)

        ctx.closePath()
        ctx.stroke();
    }
    return (
        <div className={"fractal_tree_screen"}>
            <Canvas draw={draw} settings={{start_length: length, depth: depth, fraction: fraction, angle: angle}} height={"1000px"} width={"1000px"}/>
            <div className={"fractal_tree_settings"}>
                <p>Depth</p>
                <Slider value={depth} onChange={(event, newDepth) => {setDepth(newDepth)}} min={0} max={20}/>
                <p>Start length</p>
                <Slider value={length} onChange={(event, newLength) => {setLength(newLength)}} min={10} max={200}/>
                <p>Length fraction</p>
                <Slider value={fraction*100} onChange={(event, newValue) => {setFraction(newValue/100)}} min={0} max={100}/>
                <p>Angle</p>
                <Slider value={angle} onChange={(event, newValue) => {setAngle(newValue)}} min={-90} max={90}/>
            </div>
        </div>
    )
}
