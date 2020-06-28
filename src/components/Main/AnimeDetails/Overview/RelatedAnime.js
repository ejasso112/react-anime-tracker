import React, { Component } from "react"
import RelatedAnimeSingle from "./RelatedAnimeSingle"

class RelatedAnime extends Component {
    constructor(props) {
        super()
        this.state = {
            name: props.name,
            data: props.data,
        }
    }
    render() {
    const animeRelations = this.props.data.map(item =>
        <RelatedAnimeSingle key={item.mal_id} info={item}/>
    )

        return(
            <div className="relatedAnime">
                <h1 className="relatedAnime__heading">{this.state.name}</h1>
                {animeRelations}
            </div>
        )
    }
}

export default RelatedAnime