import React, { Component } from "react"

import AnimeThumbnailLoading from "../AnimeThumbnail/AnimeThumbnailLoading"

class AnimeCarousellLoading extends Component {
    constructor(props) {
        super()
        this.state = {
            heading: props.heading,
            showItems: 8
        }
        this.myInput = React.createRef()
    }
    componentDidMount() {
        const currWidth = this.myInput.current.offsetWidth
        const newShowItems = currWidth <= 487 ? 2 :
        currWidth <= 641 ? 3 : 
        currWidth <= 795 ? 4 :
        currWidth <= 1141 ? 5 :
        currWidth <= 1327 ? 6 :
        currWidth <= 1513 ? 7 : 8
        
        this.setState({showItems: newShowItems})
    }

    render() {

        const items = []

        for (let i = 0; i < this.state.showItems; i++)
            items.push(<AnimeThumbnailLoading key={i}/>)

        return(
            <article className="animeCarousell" ref={this.myInput}>
                <h3 className="animeCarousell__heading">{this.state.heading}</h3>
                <div className="animeCarousell__content">
                    {items}
                </div>
            </article>
        )
    }
}

export default AnimeCarousellLoading