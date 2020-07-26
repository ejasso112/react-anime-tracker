import React, { Component } from "react"
import DetailsHeader from "./_DetailsHeader/DetailsHeader"
import DetailsOverview from "./_DetailsOverview/DetailsOverviw"
import Sidebar from "./Sidebar/Sidebar"
import fetchAnime from "../../actions/getAnime"
import "./Details.scss"

class Details extends Component {
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
            <div className="section details__section">
                {this.state.isLoading ? <h1>Loading</h1> :
                <div className="containerWrapper details__containerWrapper">
                    <div className="container details__sidebar">
                        <Sidebar data={this.state.data}/>
                    </div>
                    
                </div>}
                {this.state.isLoading ? <h1>Loading</h1> : <DetailsHeader data={this.state.data} />}
                {this.state.isLoading ? <h1>Loading</h1> : <DetailsOverview data={this.state.data} />}
                
                {/*<DeatailsVideos />
                <DeatailsEpisodes />
                <DeatailsReviews />
                <DeatailsStats />
                <DeatailsCharStaff />
                <DeatailsNews />
                <DeatailsPictures />*/}
            </div>
        )
    }
}

export default Details
