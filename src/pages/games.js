// this page will give an overview over all the games on the page
import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Tictactoe from "../games_all/tictactoe";

const navLinks = [
    {
        title: 'TicTacToe',
        path: '/games/tictactoe',
        component: 'tictactoe'
    }
]


export default function games () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact strict path='/games/tictactoe'><Tictactoe/> </Route>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))
                    }
                </ul>
            </Switch>

        </BrowserRouter>
    )
}
