import React from 'react';

function Box({value, onClick}) {
    return (
        <button
            style={style}
            onClick={onClick}>
            {value}
        </button>
    );
}

const style = {
    background: '#fff',
    border: '2px solid lightblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

export default Box;
