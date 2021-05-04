// this page will give an overview over all the games on the page
import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {navLinks} from "./navLinksGames";

export default function Games() {
    return (
        <BrowserRouter>
            <Switch>
                {navLinks.map((link, index) => {
                    const Component = require(`../games_all/${link.component}`).default
                    return <Route key={index} exact strict path={link.path}> <Component/> </Route>
                })}
                <React.Fragment>
                    <ul>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </React.Fragment>
            </Switch>

        </BrowserRouter>
    )
}
