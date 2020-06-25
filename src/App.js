import React, { Component } from "react"
import Footer from "./components/Footer/Footer"
import Banner from "./components/Banner/Banner"
import Main from "./components/Main/Main"
import "./App.scss"

class App extends Component {
    render() {
        return(
            <div>
                <Banner 
                    apiUrl="https://private-anon-f42d8b7f1b-jikan.apiary-proxy.com/v3/season/"
                    season="summer"
                    year="2020"
                />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App