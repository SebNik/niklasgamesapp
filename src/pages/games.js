// this page will give an overview over all the games on the page
import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

const navLinks = [
    {
        title: 'TicTacToe',
        path: '/games/tictactoe',
        component: 'tictactoe'
    }
]


export default function games() {
    return (
        <BrowserRouter>
            <Switch>
                {navLinks.map((link) => {
                    const Component = require(`../games_all/${link.component}`).default
                    return <Route exact strict path={link.path}> <Component/> </Route>
                })
                }
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
