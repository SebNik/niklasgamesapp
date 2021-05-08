import React, { useRef, useEffect, useState } from 'react'

const Canvas = props => {

    const { draw, settings } = props

    const [scale, setScale] = useState({ x: 1, y: 1 });
    const canvas = useRef(null);

    const calculateScaleX = () => (!canvas.current ? 0 : canvas.current.clientWidth / 1);
    const calculateScaleY = () => (!canvas.current ? 0 : canvas.current.clientHeight / 1);

    const resized = () => {
        canvas.current.width = canvas.current.clientWidth;
        canvas.current.height = canvas.current.clientHeight;
        setScale({ x: calculateScaleX(), y: calculateScaleY() });
    };

    useEffect(() => resized(), []);

    useEffect(() => {
        const currentCanvas = canvas.current;
        currentCanvas.addEventListener("resize", resized);
        return () => currentCanvas.removeEventListener("resize", resized);
    });

    useEffect(() => {
        draw(canvas.current, settings, scale.x, scale.y);
    }, [draw, scale]);

    // useEffect(() => {
    //
    //     const canvas = canvasRef.current
    //     const context = canvas.getContext('2d')
    //     draw(context, settings)
    // }, [draw])

    return (
        <div className={"fractal_tree_canvas"}>
            <canvas ref={canvas} style={{ width: "100%", height: "100%" }}/>
        </div>
    )
}

export default Canvas
