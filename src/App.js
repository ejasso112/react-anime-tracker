import React, { Component } from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"

import AnimeSeasonalFetch from "./components/AnimeSeasonalBanner/AnimeSeasonalFetch"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"

import "./App.scss"

class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <header>
                        <AnimeSeasonalFetch
                            page={1}
                            perPage={50}
                            season="SUMMER"
                            seasonYear={2020}
                            type="ANIME"
                            sort="POPULARITY_DESC"
                        />
                    </header>
                    <main>
                        <Route path="/" exact component={Home} />
                    </main>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App