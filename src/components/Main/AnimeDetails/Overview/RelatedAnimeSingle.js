import React, { Component } from "react"
import AnimeThumbnailFetch from "../../../AnimeThumbnail/AnimeThumbnailFetch"

class RelatedAnimeSingle extends Component {
    constructor(props) {
        super()
        this.state = {
            info: props.info
        }
    }

    render() {
        return(
            <AnimeThumbnailFetch id={this.state.info.mal_id} type={this.state.info.type}/>
        )
    }
}

export default RelatedAnimeSingle