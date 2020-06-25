import React, { Component } from "react"
import FeaturedAnime from "./FeaturedAnime/FeaturedAnime"

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            isAnimeClick: props.isAnimeClick
        }
    }

    render() {
        return (
            <section>
                <FeaturedAnime 
                    apiUrl="https://private-anon-bb69c747b6-jikan.apiary-proxy.com/v3/top/anime/"
                    page="1"
                    sortBy="upcoming"
                    title="Top Upcoming Anime"
                    isAnimeClick={this.state.isAnimeClick}
                />
                <FeaturedAnime 
                    apiUrl="https://private-anon-bb69c747b6-jikan.apiary-proxy.com/v3/top/anime/"
                    page="1"
                    sortBy="airing"
                    title="Top Airing Anime"
                    isAnimeClick={this.state.isAnimeClick}
                />
                <FeaturedAnime 
                    apiUrl="https://private-anon-bb69c747b6-jikan.apiary-proxy.com/v3/top/anime/"
                    page="1"
                    sortBy="bypopularity"
                    title="Most Popular Anime"
                    isAnimeClick={this.state.isAnimeClick}
                />
                <FeaturedAnime 
                    apiUrl="https://private-anon-bb69c747b6-jikan.apiary-proxy.com/v3/top/anime/"
                    page="1"
                    sortBy="favorite"
                    title="All Time Favorite Anime"
                    isCaroulsell={false}
                    isAnimeClick={this.state.isAnimeClick}
                />
            </section>
        )
    }
}

export default Home