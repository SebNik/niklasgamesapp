import React from 'react';

export default function Box({value, onClick}) {
    return (
        <button
            className={"box-tictactoe"}
            onClick={onClick}>
            {value}
        </button>
    );
}
