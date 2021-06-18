import React, { useState } from 'react';
import produce from 'immer';

const SpeedSlider = ({
    initialSpeed,
    minSpeed,
    maxSpeed,
    speed,
    setSpeed,
}) => {
   // const [speed, setSpeed] = useState(initialSpeed);
    const handleChange = event => {
        setSpeed(event.target.value);
        console.log(speed); 
    };


    return (
        <>
        <input
        type="range"
        className="slider"
        name="mySlider"
        id="newspeed"
        min={minSpeed}
        max={maxSpeed}
        value={speed}
        onChange={handleChange}
        />
        </>
    );
};

export { SpeedSlider };