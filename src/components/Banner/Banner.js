import React, { Component } from "react"
import "./Banner.scss"

class Banner extends Component {
    constructor(props) {        
        super()
        this.state = {
            isLight: props.isLight,
            data: props.data
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({data: nextProps.data});  
    }

    render() {
        const mode = this.state.isLight ? "light":"dark"
        const entry = this.state.data
        
        let dateFormat = !this.state.isLoading && require('dateformat');
        let month = !this.state.isLoading && entry.startDate.month ? "mmm" : ""
        let day = !this.state.isLoading && entry.startDate.day ? `${entry.startDate.month ? " " : ""}dd` : ""
        let year = !this.state.isLoading && entry.startDate.year ? `${entry.startDate.month | entry.startDate.day? ", " : ""}yyyy` : ""
        let date = !this.state.isLoading && new Date(entry.startDate.year, entry.startDate.month ?  entry.startDate.month - 1 : 1, entry.startDate.day)

        let displayDescription = !this.state.isLoading && entry.description ? entry.description : "-" 
        let displayStartDate = !this.state.isLoading && entry.startDate.year ? dateFormat(date, month + day + year) : "Unknown"
        let displayGenresMap = !this.state.isLoading && entry.genres.map((genre, i) => <li className={`banner__animeContent__item banner__animeContent__item--${mode}`} key={i}>{genre}</li>)
        
        return (
            <div className={`banner banner--${mode}`}>
                <div className={`banner__background banner__background--${mode}`}></div>
                <div className={`banner__sphere banner__sphere--${mode}`}></div>
                <div className={`banner__sphere__border banner__sphere__border--${mode}`}></div>
                <div className={`banner__imgContent banner__imgContent--${mode}`}>
                    <img className={`banner__imgContent__img banner__imgContent__img--${mode}`} src={entry.coverImage.large} alt={entry.title.userPreferred} />
                </div>
                <div className={`banner__animeContent banner__animeContent--${mode}`}>
                    <h1 className={`banner__animeContent__heading banner__animeContent__heading--${mode}`}>{`${entry.season} ${entry.seasonYear}`}</h1>
                    <h2 className={`banner__animeContent__title banner__animeContent__title--${mode}`}>{entry.title.userPreferred}</h2>
                    <p className={`banner__animeContent__description banner__animeContent__description--${mode}`} dangerouslySetInnerHTML={{__html: displayDescription}}></p>
                    <p className={`banner__animeContent__airDate banner__animeContent__airDate--${mode}`}>Date Airing: {displayStartDate}</p>
                    <ul className={`banner__animeContent__list banner__animeContent__list--${mode}`}>
                        {displayGenresMap}
                    </ul>
                </div>
            </div>
            
        )
    }
}

export default Banner
