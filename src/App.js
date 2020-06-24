import React, { Component } from "react"
import FeaturedAnime from "./components/FeaturedAnime/FeaturedAnime"
import Footer from "./components/Footer/Footer"
import Banner from "./components/Banner/Banner"
import "./App.scss"

class App extends Component {
    render() {
        return(
            <div>
                <header>
                    <Banner 
                        apiUrl="https://private-anon-f42d8b7f1b-jikan.apiary-proxy.com/v3/season/"
                        season="summer"
                        year="2020"
                    />
                </header>
                <main>
                    <FeaturedAnime 
                        apiUrl="https://private-anon-bb69c747b6-jikan.apiary-proxy.com/v3/top/anime/"
                        page="1"
                        sortBy="upcoming"
                        title="Top Upcoming Anime"
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
                        sortBy="bypopularity"
                        title="Most Popular Anime"
                    />
                    <FeaturedAnime 
                        apiUrl="https://private-anon-bb69c747b6-jikan.apiary-proxy.com/v3/top/anime/"
                        page="1"
                        sortBy="favorite"
                        title="All Time Favorite Anime"
                        isCaroulsell={false}
                    />
                </main>
                <Footer />
            </div>
        )
    }
}

export default App