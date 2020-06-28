import React, { Component } from "react"

import AnimeThumbnailLoading from "../AnimeThumbnail/AnimeThumbnailLoading"

class AnimeCarousellLoading extends Component {
    constructor(props) {
        super()
        this.state = {
            heading: props.heading
        }
    }
    render() {
        return(
            <article className="animeCarousell">
                <h3 className="animeCarousell__heading">{this.state.heading}</h3>
                <div className="animeCarousell__content">
                    <AnimeThumbnailLoading />
                    <AnimeThumbnailLoading />
                    <AnimeThumbnailLoading />
                    <AnimeThumbnailLoading />
                    <AnimeThumbnailLoading />
                    <AnimeThumbnailLoading />
                    <AnimeThumbnailLoading />
                    <AnimeThumbnailLoading />
                    <AnimeThumbnailLoading />
                    <AnimeThumbnailLoading />
                    <AnimeThumbnailLoading />
                    <AnimeThumbnailLoading />
                    <AnimeThumbnailLoading />
                </div>
            </article>
        )
    }
}

export default AnimeCarousellLoading