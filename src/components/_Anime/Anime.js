import React, { Component } from "react"
import Carousel from "../Carousel/Carousel"
import Block from "../Block/Block"

class Anime extends Component {
    render() {
        let mode = this.props.isLight ? "light":"dark"
        return(
            <section className={`section anime anime--${mode}`}>
                <div className="containerWrapper anime__containerWrapper">
                    <div className="continer anime__container">
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
                                type: "ANIME",
                                sort: "POPULARITY_DESC",
                                heading: "Most Popular Anime"
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
                    </div>
                </div>
            </section>
        )
    }
}

export default Anime