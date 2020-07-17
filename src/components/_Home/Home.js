import React, { Component } from "react"
import Carousel from "../Carousel/Carousel"
import Block from "../Block/Block"

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
                                perPage: 45,
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
                                perPage: 45,
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
                                perPage: 45,
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
                                perPage: 45,
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
                                perPage: 45,
                                type: "ANIME",
                                sort: "TRENDING_DESC",
                                heading: "Trending Anime"
                            }}
                        />

                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 45,
                                type: "MANGA",
                                sort: "TRENDING_DESC",
                                heading: "Trending Manga"
                            }}
                        />
                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 45,
                                type: "ANIME",
                                sort: "POPULARITY_DESC",
                                heading: "Most Popular Anime"
                            }}
                        />
                        <Carousel 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 45,
                                type: "MANGA",
                                sort: "POPULARITY_DESC",
                                heading: "Most Popular Manga"
                            }}
                        />
                        <Block 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 45,
                                type: "ANIME",
                                sort: "FAVOURITES_DESC",
                                heading: "All Time Favorite Anime"
                            }}
                        />
                        <Block 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 45,
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