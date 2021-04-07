import React, { useState } from 'react';
import { checkWinner } from './tic_tac_toe/Logic';
import Layout from './tic_tac_toe/Layout';

const styles = {
    width: '200px',
    margin: '20px auto',
};
const pStyle = {
    color: 'green'
}

export default function Tictactoe() {
    const [layout, setLayout] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = checkWinner(layout)

    const handleClick = (i) => {
        const layoutState = [...layout];
        if (winner || layoutState[i]) return;
        layoutState[i] = xIsNext ? 'X' : 'O';
        setLayout(layoutState);
        setXisNext(!xIsNext);
    }

    return (
        <React.Fragment>
            <Layout boxes={layout} onClick={handleClick} />
            <div style={styles}>
                <p style={pStyle}>
                    {winner ? 'Winner: ' + winner : 'Next Player '
                        + (xIsNext ? 'X' : 'O')}
                </p>

            </div>
        </React.Fragment>
    )
}
