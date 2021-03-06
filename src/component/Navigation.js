import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Icon} from "../assets/images/game_icon.svg"

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Games',
        path: '/games'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

export default function Navigation() {
    return (
        <nav className="site-navigation" id={"site-navigation"}>
            <span>
                <Icon />
                <p> Niklas & Timos Games </p>
            </span>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                    ))
                }
            </ul>
        </nav>
    )
}
