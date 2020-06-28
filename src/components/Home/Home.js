import React, { Component } from "react"
import AnimeCarouselFetch from "../AnimeCarousel/AnimeCarouselFetch"

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
                <AnimeCarouselFetch 
                    page={1}
                    perPage={50}
                    type="ANIME"
                    status="NOT_YET_RELEASED"
                    sort="POPULARITY_DESC"
                    heading="Top Upcoming Anime"
                />
                <AnimeCarouselFetch 
                    page={1}
                    perPage={50}
                    type="ANIME"
                    status="RELEASING"
                    sort="POPULARITY_DESC"
                    heading="Top Airing Anime"
                />
                <AnimeCarouselFetch 
                    page={1}
                    perPage={50}
                    type="ANIME"
                    sort="TRENDING_DESC"
                    heading="Trending Anime"
                />
                <AnimeCarouselFetch 
                    page={1}
                    perPage={50}
                    type="ANIME"
                    sort="POPULARITY_DESC"
                    heading="Most Popular Anime"
                />
                <AnimeCarouselFetch 
                    page={1}
                    perPage={50}
                    type="ANIME"
                    sort="FAVOURITES_DESC"
                    heading="All Time Favorite Anime"
                    isCarousell={false}
                />
            </section>
        )
    }
}

export default Home