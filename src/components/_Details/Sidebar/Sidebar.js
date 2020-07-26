import React, { Component } from "react"
import "./Sidebar.scss"

class Sidebar extends Component {
    render() {
        let entry = this.props.data
        let studios = entry.studios.edges
        console.log(entry)
        let ordinal = require('ordinal')
        let dateFormat = require('dateformat');

        let startMonth = entry.startDate.month ? "mmm" : ""
        let startDay = entry.startDate.day ? `${entry.startDate.month ? " " : ""}dd` : ""
        let startYear = entry.startDate.year ? `${entry.startDate.month | entry.startDate.day? ", " : ""}yyyy` : ""
        let startDate = new Date(entry.startDate.year, entry.startDate.month ?  entry.startDate.month - 1 : 1, entry.startDate.day)
        let displayStartDate = entry.startDate.year ? dateFormat(startDate, startMonth + startDay + startYear) : "Unknown"

        let endMonth = entry.endDate.month ? "mmm" : ""
        let endDay = entry.endDate.day ? `${entry.endDate.month ? " " : ""}dd` : ""
        let endYear = entry.endDate.year ? `${entry.endDate.month | entry.endDate.day? ", " : ""}yyyy` : ""
        let endDate = new Date(entry.endDate.year, entry.endDate.month ?  entry.endDate.month - 1 : 1, entry.endDate.day)
        let displayEndDate = entry.endDate.year ? dateFormat(endDate, endMonth + endDay + endYear) : "Unknown"

        let displayRank = entry.rankings.map((rank, i) => rank.allTime === true && rank.type === "POPULAR" && <li className="sidebar__list__item" key={i}>{ordinal(rank.rank)}</li>)
        let displayStudios = studios.map(studio => studio.isMain === true && <li className="sidebar__list__item" key={studio.node.id}>{studio.node.name}</li>)
        let displayProducers = studios.map(studio => studio.isMain === false && <li className="sidebar__list__item" key={studio.node.id}>{studio.node.name}</li>)
        let displayGenres = entry.genres.map((genre, i) => <li className="sidebar__list__item" key={i}>{genre}</li>)
        let displaySynonyms = entry.synonyms.map((synonym, i) => <li className="sidebar__list__item" key={i}>{synonym}</li>)

        console.log(displayStudios)
        return(
            <>
                <img className="sidebar__img" src={entry.coverImage.large} alt={entry.title.userPreferred}></img>
                <div className="sidebar">
                    <p className="sidebar__item">+ To List</p>
                </div>
                <div className="sidebar">
                    {entry.status === "RELEASING" && <><p className="sidebar__item">Airing</p>
                    <ul className="sidebar__list">
                        <li className="sidebar__list__item">Ep 1: 7d 12h 27m</li>
                    </ul></>}

                    <p className="sidebar__item">Format</p>
                    <ul className="sidebar__list">
                        <li className="sidebar__list__item">{entry.format}</li>
                    </ul>

                    <p className="sidebar__item">Episodes</p>
                    <ul className="sidebar__list">
                        <li className="sidebar__list__item">{entry.episodes}</li>
                    </ul>

                    <p className="sidebar__item">Status</p>
                    <ul className="sidebar__list">
                        <li className="sidebar__list__item sidebar__list__item__status">{entry.status.replace(/_/g, ' ').toLowerCase()}</li>
                    </ul>

                    <p className="sidebar__item">Start Date</p>
                    <ul className="sidebar__list">
                        <li className="sidebar__list__item">{displayStartDate}</li>
                    </ul>

                    <p className="sidebar__item">End Date</p>
                    <ul className="sidebar__list">
                        <li className="sidebar__list__item">{displayEndDate}</li>
                    </ul>

                    <p className="sidebar__item">Season</p>
                    <ul className="sidebar__list">
                        <li className="sidebar__list__item sidebar__list__item__season">{`${entry.season && entry.season.toLowerCase()} ${entry.seasonYear}`}</li>
                    </ul>

                    <p className="sidebar__item">Rank</p>
                    <ul className="sidebar__list">
                        {displayRank}
                    </ul>
                    
                    <p className="sidebar__item">Score</p>
                    <ul className="sidebar__list">
                        <li className="sidebar__list__item">{`${entry.averageScore/10}`}</li>
                    </ul>
                    
                    <p className="sidebar__item">Studios</p>
                    <ul className="sidebar__list">
                        {displayStudios}
                    </ul>

                    <p className="sidebar__item">Producers</p>
                    <ul className="sidebar__list">
                        {displayProducers}
                    </ul>
                    
                    <p className="sidebar__item">Source</p>
                    <ul className="sidebar__list">
                        <li className="sidebar__list__item sidebar__list__item__source">{entry.source.replace(/_/g, ' ').toLowerCase()}</li>
                    </ul>
                    
                    <p className="sidebar__item">Genres</p>
                    <ul className="sidebar__list">
                        {displayGenres}
                    </ul>
                    
                    <p className="sidebar__item">Romaji</p>
                    <ul className="sidebar__list">
                        <li className="sidebar__list__item">{entry.title.romaji}</li>
                    </ul>
                    
                    <p className="sidebar__item">English</p>
                    <ul className="sidebar__list">
                        <li className="sidebar__list__item">{entry.title.english}</li>
                    </ul>

                    <p  className="sidebar__item">Native</p>
                    <ul className="sidebar__list">
                        <li className="sidebar__list__item">{entry.title.native}</li>    
                    </ul>

                    <p  className="sidebar__item">Synonyms</p>
                    <ul className="sidebar__list">
                        {displaySynonyms}   
                    </ul>
                </div>
            </>
        )
    }
}

export default Sidebar