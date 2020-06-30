import React, { Component } from "react"

//item: alredy feched anime data from api
//isHovered: update rended is isHovered is true 
class AnimeThumbnailLoading extends Component {
    render() {
        return(
            <div className="thumbnail thumbnail--loading"></div>
        )
    }
}

export default AnimeThumbnailLoading