import React, { Component } from "react"
import DetailsHeader from "./_DetailsHeader/DetailsHeader"
import fetchAnime from "../../actions/getAnime"

class Detailsto extends Component {
    constructor(props) {
        super()
        this.state = {
            id: props.match.params.id,
            data: {},
            isLoading: true
        }
    }

    componentDidMount() {
        fetchAnime({id: this.state.id})
            .then(data => this.setState({data: data.data.Media, isLoading: false}))
            .catch(reason => console.log(reason.message))
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.match.params.id !== nextState.id) {
            this.setState({id: nextProps.match.params.id, isLoading: true})
            fetchAnime({id: nextProps.match.params.id})
                .then(data => this.setState({data: data.data.Media, isLoading: false}))
                .catch(reason => console.log(reason.message))
        }
    }

    render() {
        return (
            <>
                {this.state.isLoading ? <h1>Loading</h1>: <DetailsHeader data={this.state.data}/>}
                {/*<DetailsSidebar />
                <DeatailsOverview />
                <DeatailsVideos />
                <DeatailsEpisodes />
                <DeatailsReviews />
                <DeatailsStats />
                <DeatailsCharStaff />
                <DeatailsNews />
                <DeatailsPictures />*/}
            </>
        )
    }
}

export default Detailsto
