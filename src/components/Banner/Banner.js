import React, { Component } from "react"
import BannerItem from "./BannerItem"
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

    render =() => {
        return (
            <header className="banner">
                {!this.state.isLoaded ?
                    <h1>Loading...</h1>:
                    <BannerItem 
                        key={this.state.data[this.state.index].mal_id}
                        season={this.state.season}
                        year={this.state.year}
                        item={this.state.data[this.state.index]}
                    />
                }
                <div onClick={this.handleClickPrev} className="banner__prev banner__button">
                    <svg className="banner__button__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                </div>
                <div onClick={this.handleClickNext} className="banner__next banner__button">
                    <svg className="banner__button__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                </div>
            </header>
        )
    }
}

export default Banner