// this page will give an overview over all the games on the page
import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import GameRenderer from "../component/game-renderer";

const navLinks = [
    {
        title: 'TicTacToe',
        path: '/games/tictactoe'
    }
]


export default function games () {
    return (
        <BrowserRouter>

            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))
                }
            </ul>

            <Switch>
                <Route path="/games/:game" component={GameRenderer}/>
            </Switch>
        </BrowserRouter>
    )
}
