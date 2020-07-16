import React, { Component } from "react"
import getAnimePage from "../../actions/getAnimePage"
import CarouselContent from "./CarouselContent"
import CarouselLoading from "./CarouselLoading"
import "./Carousel.scss"

class Carousel extends Component {
    constructor(props) {
        super()
        this.state = {
            params: props.params,
            data: {},
            isLoading: true
        }
    }

    componentDidMount() {
        getAnimePage(this.state.params)
        .then(data => this.setState({
                data: data.data.Page.media,
                isLoading: false
            }
        ))
        .catch(reason => console.log(reason.message))
    }

    render() {
        return (
            <div className="carousel">
                {this.state.isLoading ? <CarouselLoading /> : <CarouselContent mode={this.props.mode} data={this.state.data} heading={this.state.params.heading} />}          
            </div>
        )
    }
}

export default Carousel