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

// const style = {
//     background: '#fff',
//     border: '2px solid lightblue',
//     fontSize: '30px',
//     fontWeight: '800',
//     cursor: 'pointer',
//     outline: 'none'
// }
