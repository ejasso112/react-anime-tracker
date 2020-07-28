import React, { Component } from "react"
import "./MediaListTable.scss"
class MediaListTable extends Component {
    constructor() {
        super()
        this.state = {
            mediListEntryMap: null
        }
    }
    async componentDidMount() {
        this.setState({
            mediListEntryMap : this.props.entries
            .sort((a,b) =>
            (a.media.title['english'] ? a.media.title['english'] :
            a.media.title['userPreferred'] ? a.media.title['userPreferred'] :
            a.media.title['native'] ? a.media.title['native'] :
            a.media.title['romaji']) > 
            (b.media.title['english'] ? b.media.title['english'] :
            b.media.title['userPreferred'] ? b.media.title['userPreferred'] :
            b.media.title['native'] ? b.media.title['native'] :
            b.media.title['romaji']) ? 1 : -1)
            .map(animeEntry =>
                <tr className="mediaListTable__contents__table__card" key={animeEntry.id}>
                    <td className="mediaListTable__contents__table__card__cover"><img className='img' src={animeEntry.media.coverImage["medium"]} alt={animeEntry.media.title['userPreferred']} /></td>
                    <td className="mediaListTable__contents__table__card__title">{
                    animeEntry.media.title['english'] ? animeEntry.media.title['english'] :
                    animeEntry.media.title['userPreferred'] ? animeEntry.media.title['userPreferred'] :
                    animeEntry.media.title['native'] ? animeEntry.media.title['native'] :
                    animeEntry.media.title['romaji']}</td>
                    <td className="mediaListTable__contents__table__card__score">{animeEntry.score}</td>
                    <td className="mediaListTable__contents__table__card__type">{animeEntry.media.format}</td>
                    <td className="mediaListTable__contents__table__card__progress">{animeEntry.progress}</td>
                </tr>
            )
        })
    }
    render() {
        const mediListEntryMap = this.state.mediListEntryMap
        return(
            <div className="mediaListTable">
                <h3 className="mediaListTable__title">{this.props.title}</h3>
                <table className="mediaListTable__contents">
                    <thead className="mediaListTable__contents__heading">
                        <tr className="mediaListTable__contents__heading__row">
                            <th className="mediaListTable__contents__heading__row__cover"></th>
                            <th className="mediaListTable__contents__heading__row__title">Title</th>
                            <th className="mediaListTable__contents__heading__row__score">Score</th>
                            <th className="mediaListTable__contents__heading__row__type">Type</th>
                            <th className="mediaListTable__contents__heading__row__progress">Progress</th>
                        </tr>
                    </thead>
                    <tbody className="mediaListTable__contents__table">
                        {mediListEntryMap}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MediaListTable