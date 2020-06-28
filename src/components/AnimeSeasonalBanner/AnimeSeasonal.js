import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./AnimeSeasonal.scss"

class Banner extends Component{
    constructor(props) {
        super()
        this.state = {
            index: 0,
            maxIndex: props.maxIndex - 1,
            season: props.season,
            data: props.data,
        }
        this.handleClickNext = this.handleClickNext.bind(this)
        this.handleClickPrev = this.handleClickPrev.bind(this)
    }

    componentDidMount() {
        this.interval = setInterval(this.handleClickNext, 10000)
    }

    handleClickNext = () => {
        this.setState(prevState => {
            return ({
                index: prevState.index === prevState.maxIndex ? 0 : prevState.index + 1
            })
        })
    }

    handleClickPrev = () => {
        this.setState(prevState => {
            return ({
                index: prevState.index === 0 ? prevState.maxIndex : prevState.index - 1
            })
        })
    }

    render() {
        const entry = this.state.data[this.state.index]
        
        const dateFormat = require('dateformat');
        const month = entry.startDate.month ? "mmm" : ""
        const day = entry.startDate.day ? `${entry.startDate.month ? " " : ""}dd` : ""
        const year = entry.startDate.year ? `${entry.startDate.month | entry.startDate.day? ", " : ""}yyyy` : ""
        const date = new Date(entry.startDate.year, entry.startDate.month ?  entry.startDate.month - 1 : 1, entry.startDate.day)

        const displayDescription = entry.description ? entry.description : "-" 
        const displayStartDate = entry.startDate.year ? dateFormat(date, month + day + year) : "Unknown"
        const displayFormat = entry.format ? entry.format : "-"
        const displayGenresMap = entry.genres.map((genre, i) => <li className="animeSeasonal__genres__item" key={i}>{genre}</li>)

        return (
            <div className="animeSeasonal">                
                <div className="animeSeasonal__button animeSeasonal__button__prev" onClick={this.handleClickPrev}>
                    <svg className="animeSeasonal__button__svg animeSeasonal__button__prev__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                </div>
                
                <div className="animeSeasonal__content">
                    <div className="animeSeasonal__details">
                    <h1 className="animeSeasonal__season">{this.state.season}</h1>
                        <Link to={`/anime/${entry.id}`} className="animeSeasonal__link">
                            <h3 className="animeSeasonal__title">{entry.title.userPreferred}</h3>
                            <p className="animeSeasonal__description" dangerouslySetInnerHTML={{__html: displayDescription}}></p>
                            <p className="animeSeasonal__dateAiring">Date Airing: {displayStartDate}</p><br />    
                        </Link>
                        <p className="animeSeasonal__format">{displayFormat}</p>
                        <ul className="animeSeasonal__genres">
                            <li className="animeSeasonal__genres__main">Genre:</li>
                            {displayGenresMap}
                        </ul>
                    </div>
                    <Link to={`/anime/${entry.id}`} className="animeSeasonal__link">
                        <img className="animeSeasonal__img" src={entry.coverImage.large} alt={entry.title.userPreferred}></img>
                    </Link>
                </div>

                <div className="animeSeasonal__button animeSeasonal__button__next" onClick={this.handleClickNext}>
                    <svg className="animeSeasonal__button__svg animeSeasonal__button__next__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                </div>
            </div>
        )
    }
}

export default Banner