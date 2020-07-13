import React, { Component } from "react"
import Navbar from "../Navbar/Navbar"
import "./Nav.scss"

class Nav extends Component {
    constructor(props) {
        super()
        this.state = {
            isLight: props.isLight
        }
    }
    render() {
        let mode = this.state.isLight ? "light":"dark"
        return (
            <nav className={`section nav nav--${mode}`}>
                <div className="containerWrapper nav__containerWrapper">
                    <div className="continer nav__container">
                        <Navbar isLight={this.state.isLight}/>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav