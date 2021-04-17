// this page will give an overview over all the games on the page
import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

const navLinks = [
    {
        title: 'TicTacToe',
        path: '/games/tictactoe',
        component: 'Tictactoe'
    },
    {
        title: 'Clicker',
        path: '/games/Clicker',
        component: 'Clicker'
    },
    {
        title: 'FlappyBird',
        path: '/games/flappybird',
        component: 'flappybird'
    }
]


export default function games() {
    return (
        <BrowserRouter>
            <Switch>
                {navLinks.map((link, index) => {
                    const Component = require(`../games_all/${link.component}`).default
                    return <Route key={index} exact strict path={link.path}> <Component/> </Route>
                })}
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </Switch>

        </BrowserRouter>
    )
}
