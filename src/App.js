import React from 'react';
import Game from './components/Game'
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/Route"

function App() {
    return (
        <BrowserRouter>
            <div className="layout">
                <Route  path="/" render={
                    () => {
                        return <h1>Niklas Test</h1>
                    }
                }/>

                <Route  path="/" render={
                    () => {
                        return <h1>Niklas Test</h1>
                    }
                }/>

            </div>
        </BrowserRouter>
    );
}

export default App;
