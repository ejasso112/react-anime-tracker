import React, { Component } from "react"
import FeaturedAnimeItem from "./FeaturedAnimeItem/FeaturedAnimeItem"
import "./FeaturedAnime.scss"

class FeaturedAnime extends Component {
    constructor(props) {
        super()
        this.state = {
            apiUrl: props.apiUrl,
            page: props.page,
            sortBy: props.sortBy,
            title: props.title,
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
        const animeItem = this.state.isLoaded &&
        this.state.data.map(item => <FeaturedAnimeItem 
            key={item.mal_id}
            image={item.image_url}
            title={item.title}
        />)
        
        return (
                <div className="featuredAnime">
                    <h3 className="featuredAnime__heading">{this.state.title}</h3>
                    <div className="featuredAnime__content">
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