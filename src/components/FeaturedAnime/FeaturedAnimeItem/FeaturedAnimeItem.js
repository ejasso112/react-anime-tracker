import React, { Component } from "react"

class FeaturedAnimeItem extends Component {
    constructor(props) {
        super()
        this.state = {
            item: props.item,
            isHovered: false,
            isCaroulsell: props.isCaroulsell,
        }
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }

    handleMouseOver() {
        this.setState({isHovered: true})
    }

    handleMouseOut() {
        this.setState({isHovered: false})
    }

    render() {
        let displayEps = this.state.item.episodes ? this.state.item.episodes : 0
        let displayAir = this.state.item.start_date ? this.state.item.start_date : "-"
        let displayInfo = this.state.isHovered ? "block" : "none"
        let isNotCarousell = !this.state.isCaroulsell ? "featuredAnime__item--extended" : ""

        return(
            <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className={`featuredAnime__item + ${isNotCarousell}`}>
                <img className="featuredAnime__item__img" src={this.state.item.image_url} alt={this.state.item.title}></img>
                <div className="featuredAnime__item__imgOverlay"></div>
                <div style={{display: displayInfo}} className="featuredAnime__item__content">
                    <div className="featuredAnime__item__top">
                        <h4 className="featuredAnime__item__title">{this.state.item.title}</h4>
                        <p className="featuredAnime__item__eps"><span>Episodes:</span> {displayEps}</p>
                        <p className="featuredAnime__item__air"><span>Air Date:</span> {displayAir}</p>
                    </div>
                    <p className="featuredAnime__item__score"><span>★</span> {this.state.item.score}</p>
                    <p className="featuredAnime__item__type">{this.state.item.type}</p>
                </div>
            </div>   
        )
    }
}

export default FeaturedAnimeItem