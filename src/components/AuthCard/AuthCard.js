import React, { Component } from "react"
import "./AuthCard.scss"

class AuthCard extends Component {
    render() {
        return(
            <div className="authCard">
                <h3 className="authCard__title">{this.props.type}</h3>
                <div className="authCard__button">
                    <a className="authCard__button__content" href="/auth/anilist">Login with {this.props.with}</a>
                </div>
                <p className="authCard__question">Neen An Account?</p>
                <a className="authCard__signup" href="https://anilist.co/signup" target="_blank" rel="noopener noreferrer">Make an Account With <span>AniList</span></a>
            </div>
        )
    }
}

export default AuthCard