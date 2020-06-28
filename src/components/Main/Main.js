import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Home/Home"
import AnimeDetails from "./AnimeDetails/AnimeDetails"

class Main extends Component {
    render() {
        return (
            <Router>
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/anime/:id" exact component={AnimeDetails} />
                    </Switch>
                </main>
            </Router>
        )
    }
}

export default Main