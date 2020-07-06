import React, { Component } from "react"
import RelatedAnime from "./RelatedAnime"
import "./Overview.scss"

class Overview extends Component {
    constructor(props) {
        super()
        this.state = {
            data: props.data
        }
    }

    render() {
        let entry = this.state.data
        let displayStartDate = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: 'numeric',
            minute: 'numeric'
        }).format(new Date(entry.aired.from))
        let displayEndDate = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: 'numeric',
            minute: 'numeric'
        }).format(new Date(entry.aired.to))

        var keys = Object.keys(entry.related);
        const relatedAnime = keys.map((version, i) => <RelatedAnime key={i} name={version} data={entry.related[version]}/>)
        
        console.log(entry.related)
        return (
            <div className="overview">
                <div className="overview__left">
                    <p className="overview__left__item">Format<br/><span className="overview__left__item--span">{entry.type}</span></p>
                    <p className="overview__left__item">Episodes<br/><span className="overview__left__item--span">{entry.episodes ? entry.episodes:"0"}</span></p>
                    <p className="overview__left__item">Duration<br/><span className="overview__left__item--span">{entry.duration}</span></p>
                    <p className="overview__left__item">Status<br/><span className="overview__left__item--span">{entry.status}</span></p>
                    <p className="overview__left__item">Start Date<br/><span className="overview__left__item--span">{displayStartDate}</span></p>
                    <p className="overview__left__item">End Date<br/><span className="overview__left__item--span">{displayEndDate}</span></p>
                    <p className="overview__left__item">Season<br/><span className="overview__left__item--span">{entry.premiered}</span></p>
                    <p className="overview__left__item">Studio(s)<br/><span className="overview__left__item--span">{/*entry.studios*/}</span></p>
                    <p className="overview__left__item">Producer(s)<br/><span className="overview__left__item--span">{/*entry.producers*/}</span></p>
                    <p className="overview__left__item">Source<br/><span className="overview__left__item--span">{entry.source}</span></p>
                    <p className="overview__left__item">Genres<br/><span className="overview__left__item--span">{/*entry.genres*/}</span></p>
                    <p className="overview__left__item">Rating<br/><span className="overview__left__item--span">{entry.rating}</span></p>
                    <p className="overview__left__item">Synonyms<br/><span className="overview__left__item--span">{/*entry.title_synonyms*/}</span></p>
                    <p className="overview__left__item">Score<br/><span className="overview__left__item--span">{entry.score ? entry.score:"-"}</span></p>
                    <p className="overview__left__item">Rank<br/><span className="overview__left__item--span">{entry.rank ? entry.rank:"-"}</span></p>
                    <p className="overview__left__item">Popularity<br/><span className="overview__left__item--span">{entry.popularity}</span></p>
                    <p className="overview__left__item">Members<br/><span className="overview__left__item--span">{entry.members}</span></p>
                    <p className="overview__left__item">Favorites<br/><span className="overview__left__item--span">{entry.favorites}</span></p>
                </div>
                <div className="overview__right">
                    <h1 className="overview__right__heading">Trailer</h1>
                    {entry.trailer_url ?
                    <iframe className="overview__right__trailer"
                        title={entry.title} src={`${entry.trailer_url}?autoplay=0&rel=0`}
                        allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>:
                    <div className="overview__right__trailer">Video Unavailable</div>}
                    <h4 className="overview__right__subheading">Background</h4>
                    <p>{entry.background}</p>
                    <h4 className="overview__right__subheading">Related Anime</h4>
                    {relatedAnime}
                    <h4 className="overview__right__subheading">Opening Theme</h4>
                    <h4 className="overview__right__subheading">Closing Theme</h4>
                </div>
            </div>
        )
    }
}

export default Overview
