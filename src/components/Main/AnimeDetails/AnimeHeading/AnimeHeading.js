import React, { Component } from "react"
import "./AnimeHeading.scss"

class AnimeHeading extends Component {
    constructor(props) {
        super()
        this.state = {
            img: props.img,
            title: props.title,
            titleEnglish: props.titleEnglish,
            titleJapanese: props.titleJapanese,
            synopsis: props.synopsis
        }
    }

    render() {
        let entry = this.state
        return (
            <div className="animeHeading">
                <div className="animeHeading__container">
                    <img className="animeHeading__img" src={entry.img} alt={entry.title}></img>
                    <div className="animeHeading__content">
                        <h1 className="animeHeading__content__title">{entry.title}</h1>
                        <h3 className="animeHeading__content__altTitles"><span>EN:</span> {entry.titleEnglish} &emsp; <span>JA:</span> {entry.titleJapanese}</h3>
                        <p className="animeHeading__content__synopsis">{entry.synopsis}</p>
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

export default AnimeHeading