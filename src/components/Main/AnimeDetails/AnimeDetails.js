import React, { Component } from "react"
import AnimeHeading from "./AnimeHeading/AnimeHeading"
import AnimeHeadingLoading from "./AnimeHeading/AnimeHeadingLoading"
import Overview from "./Overview/Overview"

class AnimeDetails extends Component {
    constructor(props) {
        super()
        this.state = {
            id: props.match.params.id,
            isLoading: true,
            data: {}
        }
    }

    async componentDidMount() {
        const url = (`https://private-anon-56e79e0790-jikan.apiary-proxy.com/v3/anime/${this.state.id}`)  
        const response = await fetch(url)
        const json = await response.json()
        this.setState({
            data: json,
            isLoading: false
        })
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextState.id !== nextProps.match.params.id){
            console.log(nextState.id, nextProps.match.params.id)
            const url = (`https://private-anon-56e79e0790-jikan.apiary-proxy.com/v3/anime/${nextProps.match.params.id}`)  
            fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ id: nextProps.match.params.id, data: data, isLoading: false}))
            return true
        }
    }

    render() {
        let entry = this.state.data
        console.log(entry)
        return (
            <section>                
                {this.state.isLoading &&
                <AnimeHeadingLoading />}

                {!this.state.isLoading &&
                <AnimeHeading
                    img={entry.image_url}
                    title={entry.title}
                    titleEnglish={entry.title_english}
                    titleJapanese={entry.title_japanese}
                    synopsis={entry.synopsis}
                />}

                {!this.state.isLoading &&
                <Overview
                    data={this.state.data}
                />}
            </section>
        )
    }
}

export default AnimeDetails
