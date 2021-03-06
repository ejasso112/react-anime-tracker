import React, { Component } from "react"
import DetailsHeading from "./DetailsHeading/DetailsHeading"
import fetchAnime from "../../actions/getAnime"


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
        const entry = !this.state.isLoading && this.state.data
        return(
            this.state.isLoading ? <h1>Loading</h1> :
            <div className="section detailsSection">
                <div className="container details__container">
                    <DetailsHeading 
                        data={entry}
                    />
                </div>
            </div>
        )
    }
}

export default Details