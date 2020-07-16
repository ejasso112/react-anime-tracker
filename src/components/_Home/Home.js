import React, { Component } from "react"
import Carousel from "../Carousel/Carousel"

class Home extends Component {
    render() {
        let mode = this.props.isLight ? "light":"dark"
        return(
            <section className={`section home home--${mode}`}>
                <div className="containerWrapper home__containerWrapper">
                    <div className="continer home__container">
                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 50,
                                status: "NOT_YET_RELEASED",
                                type: "ANIME",
                                sort: "POPULARITY_DESC",
                                heading: "Top Upcoming Anime"
                            }}
                        />
                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 50,
                                status: "NOT_YET_RELEASED",
                                type: "MANGA",
                                sort: "POPULARITY_DESC",
                                heading: "Top Upcoming Manga"
                            }}
                        />
                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 50,
                                status: "RELEASING",
                                type: "ANIME",
                                sort: "POPULARITY_DESC",
                                heading: "Top Airing Anime"
                            }}
                        />
                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 50,
                                status: "RELEASING",
                                type: "MANGA",
                                sort: "POPULARITY_DESC",
                                heading: "Top Airing Manga"
                            }}
                        />
                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 50,
                                type: "ANIME",
                                sort: "TRENDING_DESC",
                                heading: "Trending Anime"
                            }}
                        />

                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 50,
                                type: "MANGA",
                                sort: "TRENDING_DESC",
                                heading: "Trending Manga"
                            }}
                        />
                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 50,
                                type: "ANIME",
                                sort: "POPULARITY_DESC",
                                heading: "Most Popular Anime"
                            }}
                        />
                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 50,
                                type: "MANGA",
                                sort: "POPULARITY_DESC",
                                heading: "Most Popular Manga"
                            }}
                        />
                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 50,
                                type: "ANIME",
                                sort: "FAVOURITES_DESC",
                                heading: "All Time Favorite Anime"
                            }}
                        />
                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 50,
                                type: "MANGA",
                                sort: "FAVOURITES_DESC",
                                heading: "All Time Favorite Manga"
                            }}
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default Home