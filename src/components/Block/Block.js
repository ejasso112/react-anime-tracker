import React, { Component } from "react"
import getAnimePage from "../../actions/getAnimePage"
import BlockContent from "./BlockContent"
import BlockLoading from "./BlockLoading"
import "./Block.scss"

class Block extends Component {
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps) {
            getAnimePage(this.props.params)
            .then(data => this.setState({
                    data: data.data.Page.media,
                    isLoading: false
                }
            ))
            .catch(reason => console.log(reason.message))
        }
    }


    render() {
        return (
            <div className="block">
                {this.state.isLoading ? <BlockLoading /> : <BlockContent mode={this.props.mode} data={this.state.data} heading={this.state.params.heading} />}          
            </div>
        )
    }
}

export default Block