import React, { Component } from "react"
import AnimeThumbnail from "../AnimeThumbnail/AnimeThumbnail"
import "./AnimeCarousel.scss"

class AnimeCarousel extends Component {
    constructor(props) {
        super()
        this.state = {
            heading: props.heading,
            data: props.data,
            isCarousell: props.isCarousell === false ? false : true
        }
    }

    render() {
        const animeCaroursellMap = this.state.data.map(item => <AnimeThumbnail 
            key={item.id}
            data={item}
        />)

        return(
            <article className="animeCarousell">
                <h3 className="animeCarousell__heading">{this.state.heading}</h3>
                <div className={`animeCarousell__content ${!this.state.isCarousell ? "animeCarousell--extended" : ""}`}>
                    {animeCaroursellMap}
                </div>
            </article>
        )
    }
}

export default AnimeCarousel