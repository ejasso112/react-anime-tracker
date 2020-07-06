import React, { Component } from "react"
import { Link } from "react-router-dom"
import TextTruncate from 'react-text-truncate'
import "./AnimeThumbnail.scss"

//item: alredy feched anime data from api
//isHovered: update rended is isHovered is true 
class AnimeThumbnail extends Component {
    constructor(props) {
        super()
        this.state = {
            data: props.data,
            truncate: 1
        }
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }

    handleMouseOver() {
        this.setState({truncate: 4})
    }

    handleMouseOut() {
        this.setState({truncate: 1})
    }

    render() {
        const entry = this.state.data
        const dateFormat = require('dateformat');
        const month = entry.startDate.month ? "mmm" : ""
        const day = entry.startDate.day ? `${entry.startDate.month ? " " : ""}dd` : ""
        const year = entry.startDate.year ? `${entry.startDate.month | entry.startDate.day? ", " : ""}yyyy` : ""
        const date = new Date(entry.startDate.year, entry.startDate.month ?  entry.startDate.month - 1 : 1, entry.startDate.day)
        
        const displayThumbnail = entry.coverImage.large
        const displayTitle = entry.title.userPreferred
        const displayEps = entry.episodes ? entry.episodes : 0
        const displayStartDate = entry.startDate.year ? dateFormat(date, month + day + year) : "Unknown"
        const displayFormat = entry.format ? entry.format : "-"
        const displayAvgScore = entry.averageScore ? entry.averageScore / 10 : "-"

        return(
            <Link to={`/anime/${entry.id}`} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className="thumbnail">
                <img className="thumbnail__img" src={displayThumbnail} alt={displayTitle}></img>
                <div className="thumbnail__imgOverlay"></div>
                <div className="thumbnail__content">
                    <div className="thumbnail__details">
                        <TextTruncate
                            key={this.state.data.id}
                            line={this.state.truncate}
                            element="h4"
                            containerClassName="thumbnail__title"
                            truncateText="…"
                            text={displayTitle}
                        />
                        <p className="thumbnail__eps"><span className="thumbnail__span">Episodes: </span>{displayEps}</p>
                        <p className="thumbnail__air"><span className="thumbnail__span">Air Date: </span>{displayStartDate}</p>
                    </div>
                    <p className="thumbnail__score"><span className="thumbnail__span">★ </span>{displayAvgScore}</p>
                    <p className="thumbnail__type">{displayFormat}</p>
                </div>
            </Link>
        )
    }
}

export default AnimeThumbnail