import React, { Component } from "react"
import getResponsiveParam from "../../actions/getResponsiveParam"
import AnimeThumbnail from "../AnimeThumbnail/AnimeThumbnail"

class CarouselContent extends Component {
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
                prevState.index + prevState.showItems >= prevState.maxIndex ? 0 : prevState.maxIndex - prevState.showItems + 1
            })
        })
    }

    render() {
        console.log(this.state.showItems, this.state.index)
        const dataMap = this.props.data.map(entry => <AnimeThumbnail key={entry.id} data={entry} class={this.state.showItems}/>)
        return(
            <>  
                <div className="carouselContent__prev" onClick={this.handlePrev}>
                    <svg className="carouselContent__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path></svg>
                </div>
                <div className="carouselContent__next" onClick={this.handleNext}>
                    <svg className="carouselContent__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg>
                </div>
                <div className={`carouselContent carouselContent--${this.state.transition ? "transition" : ""}`} style={{'transform': `translateX(-${100/this.state.showItems*this.state.index}%)`}} ref={this.myInput}>
                    {dataMap}
                </div>
            </>
        )
    }
}

export default CarouselContent
