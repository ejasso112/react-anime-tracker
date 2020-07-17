import React, { Component } from "react"
import Carousel from "../Carousel/Carousel"
import Block from "../Block/Block"

class Manga extends Component {
    render() {
        let mode = this.props.isLight ? "light":"dark"
        return(
            <section className={`section manga manga--${mode}`}>
                <div className="containerWrapper manga__containerWrapper">
                    <div className="continer manga__container">
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

export default Manga