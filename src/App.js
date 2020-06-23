import React, { Component } from "react"
import FeaturedAnime from "./components/FeaturedAnime/FeaturedAnime"
import "./App.scss"

class App extends Component {
    render() {
        return(
            <div>
                <header>Heding goes here</header>
                <main>
                    <FeaturedAnime 
                        apiUrl="https://private-anon-bb69c747b6-jikan.apiary-proxy.com/v3/top/anime/"
                        page="1"
                        sortBy="bypopularity"
                        title="Most Popular Anime"
                    />
                    <FeaturedAnime 
                        apiUrl="https://private-anon-bb69c747b6-jikan.apiary-proxy.com/v3/top/anime/"
                        page="1"
                        sortBy="airing"
                        title="Top Airing Anime"
                    />
                    <FeaturedAnime 
                        apiUrl="https://private-anon-bb69c747b6-jikan.apiary-proxy.com/v3/top/anime/"
                        page="1"
                        sortBy="upcoming"
                        title="Top Upcoming Anime"
                    />
                </main>
                <footer>Footer goes here</footer>
            </div>
        )
    }
}

export default App