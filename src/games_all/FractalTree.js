import React, { useState } from 'react'
import Canvas from "./FractalTree/canvas";
import Slider from '@material-ui/core/Slider';

export default function FractalTree() {


    const [value, setValue] = useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const draw = (ctx, test) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.beginPath()
        ctx.moveTo(0, 0);
        ctx.lineTo(150, test.test);
        ctx.stroke();
    }
    return (
        <div className={"fractal_tree_screen"}>
            <Canvas draw={draw} settings={{test: value}} height={"500px"} width={"500px"} test={200}/>
            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </div>
    )
}
