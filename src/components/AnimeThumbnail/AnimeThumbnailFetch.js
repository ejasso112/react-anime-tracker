import React, { Component } from "react"
import AnimeThumbnailLoading from "./AnimeThumbnailLoading"
import AnimeThumbnail from "./AnimeThumbnail"

class AnimeThumbnailFetch extends Component {
    constructor(props) {
        super()
        this.state = {
            id: props.id,
            type: props.type.toUpperCase(),
            data: {},
            isLoading: true
        }
    }

    componentDidMount() {
        const query = `
            query ($id: Int, $type: MediaType) {
                Media(id: $id, type: $type) {
                    id
                    idMal
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
            }`

        const variables = {
            id: this.state.id,
            type: this.state.type
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
        .then(handleData => this.setState({data: handleData.data["Media"], isLoading: false}))
        .catch(error => console.log(error))
    }

    render() {
        return(
            this.state.isLoading ? <AnimeThumbnailLoading />:<AnimeThumbnail data={this.state.data}/>
        )
    }
}

export default AnimeThumbnailFetch