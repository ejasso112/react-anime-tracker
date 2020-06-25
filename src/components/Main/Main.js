import React, { Component } from "react"
import Home from "./Home/Home"
import AnimeDetails from "./AnimeDetails/AnimeDetails"

class Main extends Component {
    constructor() {
        super()
        this.state = {
            isHomeRendered: true,
            isAnimeRendered: false,
            animeDetails: {}
        }
        this.handleAnimeClick = this.handleAnimeClick.bind(this)
    }

    handleAnimeClick(id) {
        let dataUrl = (`https://api.jikan.moe/v3/anime/${id}`)
        fetch(dataUrl)
            .then(resp => resp.json())
            .then(dat => {
                this.setState({
                    
                    isHomeRendered: false,
                    isAnimeRendered: true,
                    animeDetails: dat
                })
            })
    }

    render() {
        return (
            <main>
                {this.state.isHomeRendered && <Home 
                    isAnimeClick={this.handleAnimeClick}
                />}
                {this.state.isAnimeRendered && <AnimeDetails 
                    data = {this.state.animeDetails}
                />}
            </main>
        )
    }
}

export default Main