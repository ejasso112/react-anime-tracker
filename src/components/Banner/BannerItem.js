import React, { Component } from "react"
import GenreItem from "./GenreItem"

class BannerItem extends Component {
    constructor(props) {
        super()
        this.state = {
            season: props.season,
            year: props.year,
            item: props.item
        }
    }

    render() {
        let newDate = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: 'numeric',
            minute: 'numeric'
        }).format(new Date(this.state.item.airing_start))

        let displayDate = newDate ? newDate : "-"

        let genreItemComponent = this.state.item.genres.map(genre => <GenreItem 
            key={genre.mal_id}
            name={genre.name}
        />)

        return (
            <div className="banner__content">
                <div className="banner__info">
                    <h1 className="banner__heading">{`${this.state.season} ${this.state.year}`}</h1>
                    <h3 className="banner__title">{this.state.item.title}</h3>
                    <p className="banner__synopsis">{this.state.item.synopsis}</p>
                    <p className="banner__date">Date Airing: {displayDate}</p><br />
                    <p className="banner__type">{this.state.item.type}</p>
                    <ul className="banner__genres">
                        <li className="banner__genres__item banner__genres__item--main">Genre:</li>
                        {genreItemComponent}
                    </ul>
                </div>
                <img className="banner__img" src={this.state.item.image_url} alt={this.state.item.title}></img>
            </div>
        )
    }
}

export default BannerItem