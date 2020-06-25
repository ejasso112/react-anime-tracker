import React, { Component } from "react"
import FeaturedAnimeItem from "./FeaturedAnimeItem"
import "./FeaturedAnime.scss"

//  url: https://private-anon-bb69c747b6-jikan.apiary-proxy.com/v3/top/anime/
//  page: 1 / 2 / 3 / ...
//  sortBy: 
//      Anime: airing / upcoming / tv / movie / ova / special
//      Manga: manga / novels / oneshots / doujin / manhwa / manhua /
//      Both: bypopularity / favorite
//  title: Heading of Section
class FeaturedAnime extends Component {
    constructor(props) {
        super()
        this.state = {
            apiUrl: props.apiUrl,
            page: props.page,
            sortBy: props.sortBy,
            title: props.title,
            isCaroulsell: props.isCaroulsell === false ? props.isCaroulsell : true,
            isAnimeClick: props.isAnimeClick,
            data: {},
            isLoaded: false
        }
    }

    componentDidMount() {
        let dataUrl = (`${this.state.apiUrl}/${this.state.page}/${this.state.sortBy}/`)
        fetch(dataUrl)
            .then(resp => resp.json())
            .then(dat => {
                this.setState({data: dat.top, isLoaded: true})
            })
    }

    render() {
        let isNotCarousell = !this.state.isCaroulsell ? "featuredAnime__content--extended" : ""

        const animeItem = this.state.isLoaded &&
        this.state.data.map(item => <FeaturedAnimeItem 
            key={item.mal_id}
            item={item}
            isCaroulsell={this.state.isCaroulsell}
            isAnimeClick={this.state.isAnimeClick}
        />)
        return (
            <div className="featuredAnime">
                <h3 className="featuredAnime__heading">{this.state.title}</h3>
                <div className={`featuredAnime__content ${isNotCarousell}`}>
                    {!this.state.isLoaded ?
                        <h1>Loading...</h1>:
                        animeItem
                    }
                </div>
            </div>
        )
    }

}

export default FeaturedAnime