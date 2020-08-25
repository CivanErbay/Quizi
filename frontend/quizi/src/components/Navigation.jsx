import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Landing} from "./Landing";
import {RandomQuestions} from "./RandomQuestions";

export default function Navigation() {

    return (
        <>
            <Router>
            <Switch>
                <Route path="/overview">
                    <RandomQuestions/>
                </Route>
                <Route path="/" >
                    <Landing/>
                </Route>
            </Switch>
            </Router>
        </>
    )

}