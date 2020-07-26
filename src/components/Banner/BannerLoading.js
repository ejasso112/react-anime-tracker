import React, { Component } from "react"
import "./Banner.scss"

class BannerLoading extends Component {
    constructor(props) {        
        super()
        this.state = {
            isLight: props.isLight,
            data: props.data
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({data: nextProps.data});  
    }

    render() {
        const mode = this.state.isLight ? "light":"dark"
        
        
        return (
            <div className={`banner banner--${mode}`}>
                <div className={`banner__background banner__background--${mode}`}></div>
                <div className={`banner__sphere __loading banner__sphere--${mode}`}></div>
                <div className={`banner__sphere__border banner__sphere__border--${mode}`}></div>
                <div className={`banner__imgContent banner__imgContent--${mode}`}>
                    <div className={`banner__imgContent__img banner__imgContent__img--${mode}`} />
                </div>
                <div className={`banner__animeContent__loading banner__animeContent--${mode}`}>
                    <div className={`banner__animeContent__loading__heading banner__animeContent__heading--${mode}`}></div>
                    <div className={`banner__animeContent__loading__title banner__animeContent__title--${mode}`}></div>
                    <p className={`banner__animeContent__loading__description banner__animeContent__description--${mode}`}></p>
                    <p className={`banner__animeContent__loading__airDate banner__animeContent__airDate--${mode}`}></p>
                </div>
            </div>
            
        )
    }
}

export default BannerLoading
