import React, { Component } from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/_Header/Header"
import Nav from "./components/_Nav/Nav"
import Home from "./components/_Home/Home"
import Anime from "./components/_Anime/Anime"
import Manga from "./components/_Manga/Manga"
import Search from "./components/_Search/Search"
import Details from "./components/Details/Details"
import Detailsto from "./components/_Details/Details"
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
        mode ? document.body.classList.add("body--light") : document.body.classList.add("body--dark")

        return(
            <Router>
                <>
                    <Route 
                        path={["/", "/anime", "/manga", "/search", "/search/:value"]} exact
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
                    <Route 
                        path="/"
                        render={(props) => <Nav {...props}
                            isLight={mode}/>
                        } 
                    />
                    <Route 
                        path="/" exact
                        render={(props) => <Home {...props}
                            isLight={mode}/>
                        } 
                    />
                    <Route 
                        path="/anime" exact
                        render={(props) => <Anime {...props}
                            isLight={mode}/>
                        } 
                    />
                    <Route 
                        path="/manga" exact
                        render={(props) => <Manga {...props}
                            isLight={mode}/>
                        } 
                    />
                    <Route 
                        path="/search" exact
                        render={(props) => <Search {...props}
                            isLight={mode}/>
                        } 
                    />
                    <Route path="/anime/:id" exact component={Detailsto} />
                    <Route path="/anime/:id" exact component={Details} />
                    <Footer />
                </>
            </Router>
        )
    }
}

export default App