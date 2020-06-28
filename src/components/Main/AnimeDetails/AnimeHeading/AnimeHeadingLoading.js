import React, { Component } from "react"
import "./AnimeHeading.scss"

class AnimeHeadingLoading extends Component {
    render() {
        return (
            <div className="animeHeading">
                <div className="animeHeading__container">
                    <div className="animeHeading__img animeHeading__img--loading"></div>
                    <div className="animeHeading__content">
                        <p className="animeHeading__content__title animeHeading__content__title--loading">.</p>
                        <p className="animeHeading__content__altTitles animeHeading__content__altTitles--loading">.</p>
                        <p className="animeHeading__content__synopsis animeHeading__content__synopsis--loading">.</p>
                    </div>
                    <ul className="animeHeading__nav">
                        <li className="animeHeading__nav__item">Overview</li>
                        <li className="animeHeading__nav__item">Videos</li>
                        <li className="animeHeading__nav__item">Episodes</li>
                        <li className="animeHeading__nav__item">Reviews</li>
                        <li className="animeHeading__nav__item">Stats</li>
                        <li className="animeHeading__nav__item">Characters/Staff</li>
                        <li className="animeHeading__nav__item">News</li>
                        <li className="animeHeading__nav__item">Pictures</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AnimeHeadingLoading