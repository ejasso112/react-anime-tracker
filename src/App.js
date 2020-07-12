import React, { Component } from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import Details from "./components/Details/Details"
import Footer from "./components/Footer/Footer"

import "./App.scss"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLight: false
        }
    }
    render() {
        const mode = this.state.isLight
        return(
            <Router>
                <div>
                    <Route 
                        path="/" exact
                        render={(props) => <Header {...props}
                            isLight={mode}
                            page={1}
                            perPage={50}
                            season="SUMMER"
                            seasonYear={2020}
                            type="ANIME"
                            sort="POPULARITY_DESC"/>
                        } 
                    />

                    <Nav />
                    <main className="section section__home">
                        <Route path="/" exact component={Home} />
                        <Route path="/anime/:id" exact component={Details} />
                    </main>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App