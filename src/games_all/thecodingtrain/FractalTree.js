import React, { useState } from 'react'
import Canvas from "./FractalTree/canvas";
import Slider from '@material-ui/core/Slider';

export default function FractalTree() {

    const [depth, setDepth] = useState(12);
    const [length, setLength] = useState(150);
    const [fraction, setFraction] = useState(0.7);
    const [angle, setAngle] = useState(40);


    const draw = (ctx, data) => {
        const deg_to_rad = Math.PI / 180.0;

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        // var gradient = ctx.createLinearGradient(ctx.canvas.width*0.2, ctx.canvas.height*0.5, ctx.canvas.width*0.8, ctx.canvas.height*0.5);
        var gradient = ctx.createRadialGradient(ctx.canvas.width*0.5, ctx.canvas.height*0.5, 20, ctx.canvas.width*0.5, ctx.canvas.height*0.5, 300);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5" ,"blue");
        gradient.addColorStop("1.0", "red");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.2;

        function drawLine(x1, y1, x2, y2){
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

        drawTree(ctx.canvas.width/2,ctx.canvas.height-(ctx.canvas.height*0.2), -90, data.depth, data.start_length, data.fraction, data.angle)
        ctx.stroke();

    }

    return (
        <div className={"fractal_tree_screen"} id={"main"}>
            <Canvas draw={draw} settings={{start_length: length, depth: depth, fraction: fraction, angle: angle}}/>
            <div className={"fractal_tree_settings"}>
                <p>Depth</p>
                <Slider value={depth} onChange={(event, newDepth) => {setDepth(newDepth)}} min={0} max={20}/>
                <p>Start length</p>
                <Slider value={length} onChange={(event, newLength) => {setLength(newLength)}} min={10} max={200}/>
                <p>Length fraction</p>
                <Slider value={fraction*100} onChange={(event, newValue) => {setFraction(newValue/100)}} min={50} max={100}/>
                <p>Angle</p>
                <Slider value={angle} onChange={(event, newValue) => {setAngle(newValue)}} min={0} max={90}/>
            </div>
        </div>
    )
}
