import React, { Component } from "react"
import AnimeSeasonal from "./AnimeSeasonal"

class AnimeSeasonalFetch extends Component {
    constructor(props) {
        super()
        this.state = {
            page: props.page,
            perPage: props.perPage,
            season: props.season,
            seasonYear: props.seasonYear,
            type:props.type,
            sort: props.sort,
            data: {},
            isLoading: true
        }
    }

    componentDidMount() {
        const query = `
            query ($page: Int, $perPage: Int, $season: MediaSeason, $seasonYear: Int, $type: MediaType, $sort: [MediaSort]) {
                Page(page: $page, perPage: $perPage) {
                    media(season: $season, seasonYear: $seasonYear, type: $type, sort: $sort, genre_not_in: "Hentai") {
                        id
                        description
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
                        genres
                    }
                }
            }`

        const variables = {
            page: this.state.page,
            perPage: this.state.perPage,
            season: this.state.season,
            seasonYear: this.state.seasonYear,
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
        .then(handleData => {
            this.setState({data: handleData.data.Page.media, isLoading: false})
        })
        .catch(error => console.log(error))

    }

    render() {
        return (
            this.state.isLoading ? <h1>Loading...</h1> :
            <AnimeSeasonal data={this.state.data} maxIndex={this.state.data.length} season={`${this.state.season} ${this.state.seasonYear}`} />
        )
    }

}
export default AnimeSeasonalFetch
