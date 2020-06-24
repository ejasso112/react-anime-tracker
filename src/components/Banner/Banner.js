import React, { Component } from "react"
import "./Banner.scss"

class Banner extends Component{
    constructor(props) {
        super()
        this.state = {
            apiUrl: props.apiUrl,
            season: props.season,
            year: props.year,
            data: {},
            index: 0,
            maxIndex: 0,
            isLoaded: false
        }
        this.handleClickNext = this.handleClickNext.bind(this)
        this.handleClickPrev = this.handleClickPrev.bind(this)
    }

    componentDidMount() {
        let dataUrl = (`${this.state.apiUrl}/${this.state.year}/${this.state.season}/`)
        fetch(dataUrl)
            .then(resp => resp.json())
            .then(dat => {
                this.setState({
                    data: dat.anime,
                    maxIndex: dat.anime.length -1,
                    isLoaded: true
                })
            })
            
        this.interval = setInterval(this.handleClickNext, 8000)
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

    render =() => {
        let date = this.state.isLoaded && this.state.data[this.state.index].airing_start
        let newDate = date && new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: 'numeric',
            minute: 'numeric'
        }).format(new Date(date))

        let displayDate = newDate ? newDate:"-"
        return (
            <div className="banner">
                {!this.state.isLoaded ?
                    <h1>Loading...</h1>:[
                    <div className="banner__content">
                        <h1 className="banner__heading">{`${this.state.season} ${this.state.year}`}</h1>
                        <h3 className="banner__title">{this.state.data[this.state.index].title}</h3>
                        <p className="banner__synopsis">{this.state.data[this.state.index].sysnopsis}</p>
                        <p className="banner__date">Date Airing: {displayDate}</p><br />
                        <p className="banner__type">{this.state.data[this.state.index].type}</p>
                        <ul className="banner__genres">
                            <li className="banner__genres__item banner__genres__item--main">Genre:</li>
                            <li className="banner__genres__item">Drama</li>
                            <li className="banner__genres__item">Fantasy</li>
                            <li className="banner__genres__item">Psychological</li>
                            <li className="banner__genres__item">Thriller</li>
                        </ul>
                    </div>,
                    <img className="banner__img" src={this.state.data[this.state.index].image_url} alt={this.state.data[this.state.index].title}></img>,
                    <div onClick={this.handleClickPrev} className="banner__prev banner__button">Prev</div>,
                    <div onClick={this.handleClickNext} className="banner__next banner__button">Next</div>]
                }
            </div>
        )
    }
}

export default Banner