import React, { useState } from 'react';
import { checkWinner } from './tic_tac_toe/Logic';
import Layout from './tic_tac_toe/Layout';

export default function Tictactoe() {
    const [layout, setLayout] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = checkWinner(layout);

    const handleClick = (i) => {
        const layoutState = [...layout];
        if (winner || layoutState[i]) return;
        layoutState[i] = xIsNext ? 'X' : 'O';
        setLayout(layoutState);
        setXisNext(!xIsNext);
    }

    const newGame = () => {
        console.log("Starting a new game")
        setLayout(Array(9).fill(null))
    }

    let message = "";
    if (winner){
        message = "Winner: " + winner;
    } else {
        message = "Next Player: " + (xIsNext ? "X" : "O")
    }

    return (
        <React.Fragment>
            <Layout boxes={layout} onClick={handleClick} />
            <div className={"tictactoe"}>
                <p>{message}</p>
                <button onClick={newGame}> New Game </button>

            </div>
        </React.Fragment>
    )
}
