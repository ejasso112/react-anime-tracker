import React, { Component } from "react"
import getResponsiveParam from "../../../actions/getResponsiveParam"
import AnimeThumbnail from "../../AnimeThumbnail/AnimeThumbnail"
import "./Relations.scss"
class Relations extends Component {
    constructor(props) {
        super()
        this.state = {
            showItems: 0
        }
        this.updateShowItemsAmount = this.updateShowItemsAmount.bind(this)
        
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
        console.log(currWidth)

        showItems !== this.state.showItems && this.setState({
                showItems: showItems
            })
    }

    render() {
        let displayRelations = this.props.data.map(relation => <AnimeThumbnail key={relation.node.id} data={relation.node} class={this.state.showItems}/>)
        return(
            <div className={`relations__content`} ref={this.myInput}>
                {displayRelations}
            </div>
        )
    }
}

export default Relations
