import React from 'react';
import Navigation from "./component/Navigation";
import {BrowserRouter as Router,Switch, Route, Redirect} from "react-router-dom";
import PageRenderer from "./page-renderer";
import './assets/scss/base.scss'


function App() {
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <Switch>
                    <Route exact path="/:page" component={PageRenderer}/>
                    <Route path="/" render={() => <Redirect to="/home" />} />
                    <Route component={() => 404} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
