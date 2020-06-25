import React, { Component } from "react"

class AnimeDetails extends Component {
    constructor(props) {
        super()
        this.state = {
            data: props.data
        }
    }
    render() {
        let entry = this.state.data
        console.log(this.state.data)
        return (
            <div>
                <h1>{entry.title}</h1>
                <h2>{`Alternate titles: ${entry.title_english} | ${entry.title_japanese}`}</h2>
                <img src={entry.image_url} alt={entry.title}></img>
                <h3>{entry.title_synonyms}</h3>
                <p>{entry.synopsis}</p>
            </div>
        )
    }
}

export default AnimeDetails