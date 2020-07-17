import React, { Component } from "react"
import getResponsiveParam from "../../actions/getResponsiveParam"
import AnimeThumbnail from "../AnimeThumbnail/AnimeThumbnail"

class BlockContent extends Component {
    constructor(props) {
        super()
        this.state = {
            showItems: 0,
            index: 0,
            maxIndex: props.data.length - 1,
            transition: false
        }
        this.updateShowItemsAmount = this.updateShowItemsAmount.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
        this.handleNext = this.handleNext.bind(this)
        
        this.myInput = React.createRef()
    }

    componentDidMount() {
        const currWidth = this.myInput.current.offsetWidth
        const showItems = getResponsiveParam(currWidth, [546,720,890,1068,1246,1424], [3,4,5,6,7,8,9])

        this.setState({
            showItems: showItems,
        })
        window.addEventListener('resize', this.updateShowItemsAmount);
    }

    componentWillUnmount() { 
        window.removeEventListener('resize', this.updateShowItemsAmount);
    }

    updateShowItemsAmount = () => {
        let currWidth = this.myInput.current.offsetWidth
        let showItems = getResponsiveParam(currWidth, [546,720,890,1068,1246,1424], [3,4,5,6,7,8,9])

        showItems !== this.state.showItems && this.setState(prevState => {
            return({
                transition: false,
                showItems: showItems,
                index: prevState.index > prevState.maxIndex - showItems + 1 ? prevState.maxIndex - showItems + 1 : prevState.index
            })
        })
    }

    handlePrev = () => {
        this.setState(prevState =>{
            return ({
                transition: true,
                index: prevState.index === 0 ? prevState.maxIndex - prevState.showItems + 1 : 
                prevState.index - prevState.showItems <= 0 ? 0 : prevState.index - prevState.showItems
            })
        })
    }

    handleNext = () => {
        this.setState(prevState =>{
            return ({
                transition: true,
                index: prevState.index + prevState.showItems < prevState.maxIndex - prevState.showItems ? prevState.index + prevState.showItems :
                prevState.index + prevState.showItems > prevState.maxIndex ? 0 : prevState.maxIndex - prevState.showItems + 1
            })
        })
    }

    render() {
        console.log(this.state.showItems, this.state.index)
        const dataMap = this.props.data.map(entry => <AnimeThumbnail key={entry.id} data={entry} class={this.state.showItems}/>)
        return(
            <div className="blockContent">
                <h3 className="blockContent__heading">{this.props.heading}</h3>
                <div className="blockContent__container">
                    <div className={`blockContent__content blockContent__content--${this.state.transition ? "transition" : ""}`} style={{'transform': `translateX(-${100/this.state.showItems*this.state.index}%)`}} ref={this.myInput}>
                        {dataMap}
                    </div>
                </div>
            </div>
        )
    }
}

export default BlockContent
