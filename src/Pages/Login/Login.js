import React, { Component } from "react"
import AuthCard from "../../components/AuthCard/AuthCard"
import "./Login.scss"

class Login extends Component {
    render() {
        return(
            <section className="section login">
                <div className="containerWrapper login__containerWrapper">
                    <div className="contaner login__container">
                        <AuthCard type="login" with="AniList" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Login