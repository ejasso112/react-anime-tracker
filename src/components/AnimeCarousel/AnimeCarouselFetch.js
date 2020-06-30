import React, { Component } from "react"
import AnimeCarousel from "./AnimeCarousel"
import AnimeCarouselLoading from "./AnimeCarouselLoading"

class AnimeCarouselFetch extends Component {
    constructor(props) {
        super()
        this.state = {
            page: props.page,
            perPage: props.perPage,
            status: props.status && props.status,
            sort: props.sort,
            type: props.type,
            heading: props.heading,
            data: {},
            isLoading: true,
            isCarousell: props.isCarousell
        }
    }

    componentDidMount() {
        const query = `
            query ($page: Int, $perPage: Int, $status: MediaStatus, $type: MediaType, $sort: [MediaSort]) {
                Page(page: $page, perPage: $perPage) {
                    media(status: $status, type: $type, sort: $sort, genre_not_in: "Hentai") {
                        id
                        popularity
                        coverImage {
                            extraLarge
                            large
                            medium
                            color
                        }
                        title {
                            romaji
                            english
                            native
                            userPreferred
                        }
                        episodes
                        startDate {
                            year
                            month
                            day
                        }
                        averageScore
                        format
                    }
                }
            }`

        const variables = {
            page: this.state.page,
            perPage: this.state.perPage,
            status: this.state.status,
            type: this.state.type,
            sort: this.state.sort
        }

        const url = "https://graphql.anilist.co",
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };

        fetch(url, options)
        .then(handleResponse => handleResponse.json())
        .then(handleData => this.setState({data: handleData.data.Page.media, isLoading: false}))
        .catch(error => console.log(error))
    }

    render() {
        return (
            this.state.isLoading ? <AnimeCarouselLoading heading={this.state.heading} />:<AnimeCarousel heading={this.state.heading} data={this.state.data} isCarousell={this.state.isCarousell}/>
        )
    }

}

export default AnimeCarouselFetch
