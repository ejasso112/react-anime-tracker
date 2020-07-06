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
        console.log(this.state.id, nextState.id, nextProps.match.params.id)
        if(nextProps.match.params.id !== nextState.id) {
            this.setState({id: nextProps.match.params.id, isLoading: true})
            fetchAnime({id: nextProps.match.params.id})
                .then(data => this.setState({data: data.data.Media, isLoading: false}))
                .catch(reason => console.log(reason.message))
        }
    }

    render() {
        const entry = !this.state.isLoading && this.state.data
        console.log(entry)
        return(
            this.state.isLoading ? <h1>Loading</h1> :
            <div className="detailsSection">
                <DetailsHeading 
                    data={entry}
                />
            </div>
        )
    }
}

export default Details