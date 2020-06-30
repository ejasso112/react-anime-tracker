import React, { Component } from "react"
import AnimeThumbnail from "../AnimeThumbnail/AnimeThumbnail"
import "./AnimeCarousel.scss"

class AnimeCarousel extends Component {
    constructor(props) {
        super()
        this.state = {
            heading: props.heading,
            data: props.data,
            pageLength: props.data.length,
            showItems: 8,
            width: 0,
            index: 0,
        }
        this.myInput = React.createRef()
        this.updateDimensions = this.updateDimensions.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }

    componentDidMount() {
        const currWidth = this.myInput.current.offsetWidth
        const newShowItems = currWidth <= 349 ? 2 :
        currWidth <= 641 ? 3 : 
        currWidth <= 707 ? 4 :
        currWidth <= 1141 ? 5 :
        currWidth <= 1327 ? 6 :
        currWidth <= 1513 ? 7 : 8
        
        this.setState({showItems: newShowItems})
        window.addEventListener('resize', this.updateDimensions);
    }
    
    updateDimensions = () => {
        const currWidth = this.myInput.current.offsetWidth
        const prevWidth = this.state.width
        
        //2: 334 - 487
        if(currWidth <= 349 && (prevWidth >= 350))
            this.setState(prevState => {
                return ({
                    showItems: 2,
                    width: this.myInput.current.offsetWidth,
                    index: prevState.index > prevState.pageLength - 2 ? prevState.pageLength - 2 : prevState.index
                })
            })
        //3: 350 - 641
        else if(currWidth >= 350 && currWidth <= 641 && (prevWidth <= 487 || prevWidth >= 642))
            this.setState(prevState => {
                return ({
                    showItems: 3,
                    width: this.myInput.current.offsetWidth,
                    index: prevState.index > prevState.pageLength - 3 ? prevState.pageLength - 3 : prevState.index
                })
            })
        //4: 642 - 707
        else if(currWidth >= 642 && currWidth <= 707 && (prevWidth <= 641 || prevWidth >= 708))
            this.setState(prevState => {
                return ({
                    showItems: 4,
                    width: this.myInput.current.offsetWidth,
                    index: prevState.index > prevState.pageLength - 4 ? prevState.pageLength - 4 : prevState.index
                })
            })
        //5: 756 - 1141
        else if(currWidth >= 708 && currWidth <= 1141 && (prevWidth <= 707 || prevWidth >= 1142))
            this.setState(prevState => {
                return ({
                    showItems: 5,
                    width: this.myInput.current.offsetWidth,
                    index: prevState.index > prevState.pageLength - 5 ? prevState.pageLength - 5 : prevState.index
                })
            })
        //6: 1142 - 1327
        else if(currWidth >= 1142 && currWidth <= 1327 && (prevWidth <= 1141 || prevWidth >= 1328))
            this.setState(prevState => {
                return ({
                    showItems: 6,
                    width: this.myInput.current.offsetWidth,
                    index: prevState.index > prevState.pageLength - 6 ? prevState.pageLength - 6 : prevState.index
                })
            })
        //7: 1328 - 1513
        else if(currWidth >= 1328 && currWidth <= 1513 && (prevWidth <= 1327 || prevWidth >= 1514))
            this.setState(prevState => {
                return ({
                    showItems: 7,
                    width: this.myInput.current.offsetWidth,
                    index: prevState.index > prevState.pageLength - 7 ? prevState.pageLength - 7 : prevState.index
                })
            })
        // 8: 1514 - MAX
        else if(currWidth >= 1514 && (prevWidth <= 1513))
            this.setState(prevState => {
                return ({
                    showItems: 8,
                    width: this.myInput.current.offsetWidth,
                    index: prevState.index > prevState.pageLength - 8 ? prevState.pageLength - 8 : prevState.index
                })
            })
    }

    handleNext() {
        this.setState(prevState =>{
            // If newIndex < indexOfLastFrame then index = newIndex
            // If newIndex > indexOfLastFrame then index = indexOfLastFrame
            // If newIndex = lenge then index = 0
            return ({
                index: prevState.index + prevState.showItems < prevState.pageLength - prevState.showItems ? prevState.index + prevState.showItems :
                prevState.index + prevState.showItems >= prevState.pageLength ? 0 : prevState.pageLength - prevState.showItems
            })
        })
    }
    render() {
        const animeCaroursellMap = this.state.data.slice(this.state.index, this.state.showItems+this.state.index).map(item => <AnimeThumbnail 
            key={item.id}
            data={item}
        />)

        return(
            <article className="animeCarousell" ref={this.myInput}>
                <h3 className="animeCarousell__heading" onClick={this.handleNext}>{this.state.heading}</h3>
                <div className="animeCarousell__content">
                    {animeCaroursellMap}
                </div>
            </article>
        )
    }
}

export default AnimeCarousel