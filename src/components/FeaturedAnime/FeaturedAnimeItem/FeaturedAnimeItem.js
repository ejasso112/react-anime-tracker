import React, { Component } from "react"

class FeaturedAnimeItem extends Component {
    constructor(props) {
        super()
        this.state = {
            image: props.image,
            title: props.title
        }
    }
    render() {
        return(
            <div className="featuredAnime__item">
                <img className="featuredAnime__img" src={this.state.image} alt={this.state.title}></img>
            </div>   
        )
    }
}

export default FeaturedAnimeItem