import React, { Component } from "react"
import MediaListTable from "../../../components/displayMedia/MediaListTable/MediaListTable"

class AnimeList extends Component {
    render() {

        const UserAnimeListNames = this.props.userData.ANIME.lists.map((listEntry, i) => 
            <MediaListTable key={i} title={listEntry.name} entries={listEntry.entries}/>
        )

        return (
            <>
            <h1>here</h1>
            {UserAnimeListNames}
            </>
        )
    }
}

export default AnimeList

