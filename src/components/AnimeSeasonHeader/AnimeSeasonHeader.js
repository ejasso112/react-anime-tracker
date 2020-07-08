import React, { Component } from "react"
import { Link } from "react-router-dom"
import getAnimePage from "../../actions/getAnimePage"
import "./AnimeSeasonHeader.scss"

class AnimeSeasonHeader extends Component {
    constructor(props) {
        super()
        this.state = {
            index: 0,
            maxIndex: 0,
            parameters: props,
            data: {},
            isLoading: true
        }
        this.handleClickNext = this.handleClickNext.bind(this)
        this.handleClickPrev = this.handleClickPrev.bind(this)
    }

    componentDidMount() {
        getAnimePage(this.state.parameters)

        .then(data => this.setState({
                maxIndex: data.data.Page.media.length - 1,
                data: data.data.Page.media,
                isLoading: false
            }
        ))
        .catch(reason => console.log(reason.message))

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
        const animeList = this.state.data
        let entry = animeList[this.state.index]
        
        let dateFormat = !this.state.isLoading && require('dateformat');
        let month = !this.state.isLoading && entry.startDate.month ? "mmm" : ""
        let day = !this.state.isLoading && entry.startDate.day ? `${entry.startDate.month ? " " : ""}dd` : ""
        let year = !this.state.isLoading && entry.startDate.year ? `${entry.startDate.month | entry.startDate.day? ", " : ""}yyyy` : ""
        let date = !this.state.isLoading && new Date(entry.startDate.year, entry.startDate.month ?  entry.startDate.month - 1 : 1, entry.startDate.day)

        let displayDescription = !this.state.isLoading && entry.description ? entry.description : "-" 
        let displayStartDate = !this.state.isLoading && entry.startDate.year ? dateFormat(date, month + day + year) : "Unknown"
        let displayFormat = !this.state.isLoading && entry.format ? entry.format : "-"
        let displayGenresMap = !this.state.isLoading && entry.genres.map((genre, i) => <li className="header__genres__item" key={i}>{genre}</li>)

        return (
            this.state.isLoading ? <h1>Loading</h1> :
            <header className="section header">
                <div className="containerWrapper header__containerWrapper">
                    <div className="container header__container">
                        <div className="header__button header__button__prev" onClick={this.handleClickPrev}>
                            <svg className="header__button__svg header__button__prev__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                        </div>

                        <div className="header__content">
                            <div className="header__details">
                                <h1 className="header__season">{`${entry.season} ${entry.seasonYear}`}</h1>
                                <Link to={`/anime/${entry.id}`} className="header__animeLink">
                                    <h3 className="header__title">{entry.title.userPreferred}</h3>
                                    <p className="header__description" dangerouslySetInnerHTML={{__html: displayDescription}}></p>
                                    <p className="header__dateAiring">Date Airing: {displayStartDate}</p>
                                </Link>
                                <p className="header__format">{displayFormat}</p>
                                <ul className="header__genres">
                                    <li className="header__genres__main">Genre:</li>
                                    {displayGenresMap}
                                </ul>
                            </div>

                            <Link to={`/anime/${entry.id}`} className="animeSeasonal__link">
                                <img className="header__img" src={entry.coverImage.large} alt={entry.title.userPreferred}></img>
                            </Link>
                        </div>

                        <div className="header__button header__button__next" onClick={this.handleClickNext}>
                            <svg className="header__button__svg header__button__next__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}
export default AnimeSeasonHeader
