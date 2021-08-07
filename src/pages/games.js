// this page will give an overview over all the games on the page
import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {navLinks} from "./navLinksGames";


export default function Games() {

    function position(index, data) {
        let column_start = index - (Math.trunc(index / 4) * 4)
        let row_start = (Math.trunc(index / 4))
        // TODO ADD the right image
        const image_im = require(`../assets/images/games_thumbnail/${data.title}.png`).default
        return {
            gridRow: `${row_start + 2} / ${row_start + 3}`,
            gridColumn: `${column_start + 2} / ${column_start + 3}`,
            backgroundImage: `url(${image_im})`,
        }
    }

    return (
        <BrowserRouter>
            <Switch>
                {navLinks.map((link, index) => {
                    const Component = require(`../games_all${link.path_to_component}${link.component}`).default
                    return <Route key={index} exact strict path={link.path}> <Component/> </Route>
                })}
                <div className={"container-games"}>
                    {navLinks.map((link, index) => (
                        <div key={index} className={"single-game-item"} style={position(index, link)}>
                            <Link to={link.path}>{link.title}</Link>
                        </div>
                    ))}
                </div>
            </Switch>
        </BrowserRouter>
    )
}
