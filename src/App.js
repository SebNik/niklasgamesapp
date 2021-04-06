import React from 'react';
import TicTacToeGame from './games/tic_tac_toe/Game'
import About from "./pages/About";
import './App.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import Route from "react-router-dom/Route"

function App() {
    return (
        <BrowserRouter>
            <div className="layout">

                <Route  path="/about" exact ={true} component={About}/>
                <NavLink strict exact to="/about">About</NavLink>

                <Route  path="/tictactoe" exact ={true} component={TicTacToeGame}/>
                <NavLink strict exact to="/tictactoe">TicTacToe Game</NavLink>
            </div>
        </BrowserRouter>
    );
}

export default App;
