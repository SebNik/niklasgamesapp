import React from 'react';
import './App.css';
import Navigation from "./pages/Navigation";
import {BrowserRouter as Router,Switch, Route, Redirect} from "react-router-dom";

import './assets/scss/base.scss'

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation/>
            </div>
        </Router>
    );
}

export default App;
