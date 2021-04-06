import React from 'react';
import Game from './components/Game'
import './App.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import Route from "react-router-dom/Route"

function App() {
    return (
        <BrowserRouter>
            <div className="layout">
                <Route  path="/" exact ={true} render={
                    () => {
                        return <h1>Niklas Test</h1>
                    }
                }/>

                <Route  path="/about" exact ={true} render={
                    () => {
                        return <h1>Niklas Test 2</h1>
                    }
                }/>

                <Route  path="/ticktacktoe" exact ={true} component={Game}/>

            </div>
        </BrowserRouter>
    );
}

export default App;
