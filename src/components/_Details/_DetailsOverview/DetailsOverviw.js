import React, { Component } from "react"
import Relations from "../Relations/Relations"
import "./DetailsOverview.scss"

class DetailsOverview extends Component {
    render() {
        let relations = this.props.data.relations.edges
        
        return(
            <div className="containerWrapper detailsOverview__containerWrapper">
                <div className="container detailsOverview__container">
                    <div className="detailsOverview__content">
                        <h2>Relations</h2>
                        <Relations data={relations} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsOverview