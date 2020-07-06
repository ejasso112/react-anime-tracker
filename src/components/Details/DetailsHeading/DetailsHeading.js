import React, { Component } from "react"
import "./AnimeHeading.scss"

class DetailsHeading extends Component {
    constructor(props) {
        super()
        this.state = {
            data: props.data
        }
    }

    render() {
        const entry = this.state.data
        console.log(entry)
        return (
            <div className="details__wrapper section">
                <div className="detailsHeading section">
                    <article className="detailsHeading__container container">
                        <div className="detailsHeading__top">
                            <img className="detailsHeading__top__img" src={entry.coverImage.large} alt={entry.title.userPreferred}></img>
                            <div className="detailsHeading__top__content">
                                <div>
                                    <h1 className="detailsHeading__top__title">{entry.title.userPreferred}</h1>
                                    <p className="detailsHeading__top__description" dangerouslySetInnerHTML={{__html: entry.description}}></p>
                                </div>
                                <ul className="detailsHeading__top__nav">
                                    <li className="detailsHeading__top__nav__item">Overview</li>
                                    <li className="detailsHeading__top__nav__item">Videos</li>
                                    <li className="detailsHeading__top__nav__item">Episodes</li>
                                    <li className="detailsHeading__top__nav__item">Reviews</li>
                                    <li className="detailsHeading__top__nav__item">Stats</li>
                                    <li className="detailsHeading__top__nav__item">Characters/Staff</li>
                                    <li className="detailsHeading__top__nav__item">News</li>
                                    <li className="detailsHeading__top__nav__item">Pictures</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="detailsContent container">        
                    <div className="detailsContent__sidebar">
                        <p className="detailsContent__sidebar__item">Airing</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">Ep 1: 7d 12h 27m</li>
                        </ul>

                        <p className="detailsContent__sidebar__item">Format</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">TV</li>
                        </ul>

                        <p className="detailsContent__sidebar__item">Status</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">Not Yet Released</li>
                        </ul>

                        <p className="detailsContent__sidebar__item">Start Date</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">Jul 8, 2020</li>
                        </ul>

                        <p className="detailsContent__sidebar__item">Season</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">Summer 2020</li>
                        </ul>

                        <p className="detailsContent__sidebar__item">Popularity</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">42020</li>
                        </ul>
                        
                        <p className="detailsContent__sidebar__item">Favorites</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">724</li>
                        </ul>
                        
                        <p className="detailsContent__sidebar__item">Studios</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">White Fox</li>
                        </ul>
                        
                        <p className="detailsContent__sidebar__item">Source</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">Light Novel</li>
                        </ul>

                        <p className="detailsContent__sidebar__item">Hashtag</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">#rezero</li>
                            <li className="detailsContent__sidebar__list__item">#リゼロ</li>
                        </ul>
                        
                        <p className="detailsContent__sidebar__item">Genres</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">Action</li>
                            <li className="detailsContent__sidebar__list__item">Adventure</li>
                            <li className="detailsContent__sidebar__list__item">Drama</li>
                            <li className="detailsContent__sidebar__list__item">Fantasy</li>
                            <li className="detailsContent__sidebar__list__item">Psychological</li>
                        </ul>
                        
                        <p className="detailsContent__sidebar__item">Romaji</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season</li>
                        </ul>
                        
                        <p className="detailsContent__sidebar__item">English</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">Re:ZERO -Starting Life in Another World- Season 2</li>
                        </ul>

                        <p  className="detailsContent__sidebar__item">Native</p>
                        <ul className="detailsContent__sidebar__list">
                            <li className="detailsContent__sidebar__list__item">Re:ゼロから始める異世界生活 2nd Season</li>    
                        </ul>
                    </div>
                    <div className="detailsContent__main">
                        here
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsHeading
