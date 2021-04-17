import React, {useState} from 'react';

export default function Clicker() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    const clickHandler = ({keyCode}) => {
        if (keyCode === 37) {
            console.log("left-minus")
            setCount(count - 1)
        } else if (keyCode === 39) {
            console.log("right-plus")
            setCount(count + 1)
        }
    }

    return (
        <div className={"clicker-design"} onKeyDown={clickHandler} tabIndex="0">
            <p>You clicked {count} times</p>
            <button className={"button-clicker-plus"} onClick={() => setCount(count + 1)}>+</button>
            <button className={"button-clicker-minus"} onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}
