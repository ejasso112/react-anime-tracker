import React, { Component } from "react"

class GenreItem extends Component {
    constructor(props) {
        super()
        this.state = {
            name: props.name
        }
    }

    render() {
        return (
            <li className="banner__genres__item">{this.state.name}</li>
        )
    }
}

export default GenreItem