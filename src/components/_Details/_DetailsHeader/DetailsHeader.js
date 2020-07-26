import React, { Component } from "react"
import "./DetailsHeader.scss"

class DetailsHeader extends Component {
    render() {
        let entry = this.props.data;
        return(
            <div className="section DetailsHeader">
                <div className="containerWrapper DetailsHeader__containerWrapper">
                    <div className="container DetailsHeader__container">
                        
                        <div className="DetailsHeader__content">
                            <h1 className="DetailsHeader__title">{entry.title.userPreferred}</h1>
                            <p className="DetailsHeader__description" dangerouslySetInnerHTML={{__html: entry.description}}></p>
                        
                        
                            <ul className="DetailsHeader__nav">
                                <li className="DetailsHeader__nav__item">Overview</li>
                                <li className="DetailsHeader__nav__item">Videos</li>
                                <li className="DetailsHeader__nav__item">Episodes</li>
                                <li className="DetailsHeader__nav__item">Reviews</li>
                                <li className="DetailsHeader__nav__item">Stats</li>
                                <li className="DetailsHeader__nav__item">Characters/Staff</li>
                                <li className="DetailsHeader__nav__item">News</li>
                                <li className="DetailsHeader__nav__item">Pictures</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsHeader
