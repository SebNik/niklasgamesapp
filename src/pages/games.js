// this page will give an overview over all the games on the page
import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {navLinks} from "./navLinksGames";

export default function Games() {

    function position(index) {
        let column_start = index - (Math.trunc(index/5)*5)
        let row_start = (Math.trunc(index/5))
        let style = {
            gridRow: `${row_start+2} / ${row_start+3}`,
            gridColumn: `${column_start+2} / ${column_start+3}`,
            // TODO ADD the background image here
        }
        return style
    }

    return (
        <BrowserRouter>
            <Switch>
                {navLinks.map((link, index) => {
                    const Component = require(`../games_all/${link.component}`).default
                    return <Route key={index} exact strict path={link.path}> <Component/> </Route>
                })}
                <div className={"container-games"}>
                    {navLinks.map((link, index) => (
                        <div key={index} className={"single-game-item"} style={position(index)}>
                            <Link to={link.path}>{link.title}</Link>
                        </div>
                    ))}
                </div>
            </Switch>
        </BrowserRouter>
    )
}
