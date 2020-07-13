import React, { Component } from "react"
import Banner from "../Banner/Banner"
import getAnimePage from "../../actions/getAnimePage"
import "./Header.scss"

class Header extends Component {
    constructor(props) {
        super()
        this.state = {
            isLight: props.isLight,
            index: 0,
            maxIndex: 0,
            parameters: props,
            data: {},
            isLoading: true
        }
        this.handleClickNext = this.handleClickNext.bind(this)
        this.handleClickPrev = this.handleClickPrev.bind(this)
    }

    componentDidMount() {
        getAnimePage(this.state.parameters)
        .then(data => this.setState({
                maxIndex: data.data.Page.media.length - 1,
                data: data.data.Page.media,
                isLoading: false
            }
        ))
        .catch(reason => console.log(reason.message))

        this.interval = setInterval(this.handleClickNext, 10000)
    }

    handleClickNext = () => {
        this.setState(prevState => {
            return ({
                index: prevState.index === prevState.maxIndex ? 0 : prevState.index + 1
            })
        })
    }

    handleClickPrev = () => {
        this.setState(prevState => {
            return ({
                index: prevState.index === 0 ? prevState.maxIndex : prevState.index - 1
            })
        })
    }

    render() {
        const mode = this.state.isLight ? "light":"dark"

        return (
            this.state.isLoading ? <h1>Loading</h1> :
            <header className={`section header header--${mode}`}>
                <div className="containerWrapper header__containerWrapper">
                    <div className="container header__container">
                        <div className="header__button header__button__prev" onClick={this.handleClickPrev}>
                            <svg className={`header__button__svg header__button__svg--${mode} header__button__prev__svg`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                        </div>

                        <Banner isLight={this.state.isLight} data={this.state.data[this.state.index]} />

                        <div className="header__button header__button__next" onClick={this.handleClickNext}>
                            <svg className={`header__button__svg header__button__svg--${mode} header__button__next__svg`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}
export default Header
