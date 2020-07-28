import React, { Component } from "react"
import { Route } from "react-router-dom"
import getUserMediaList from "../../actions/getUserMediaList"

import ProfileNav from "../../components/navigations/NavProfile/NavProfile"
import AnimeList from "./AnimeList/AnimeList"

import "./Profile.scss"

class Profile extends Component {
    constructor(props) {
        super()
        this.state = {
            user: props.user,
            userData: {},
            isUserLoaded: false
        }
    }

    async componentDidMount() {
        const userId = this.state.user.user.id
        const data = await getUserMediaList(userId)
        this.setState({userData: data, isUserLoaded: true})
    }

    render() {
        return(
            this.state.isUserLoaded &&
            <section className="section profile__section">
                <header className="profile__header">
                    <div className="container">
                        <h1 className="profile__header__title">Welcome <span>{this.state.user.user.name}</span></h1>
                    </div>
                </header>
                
                <nav className="profile__nav">
                    <Route 
                        path={this.props.location.pathname}
                        render={(props) => <ProfileNav {...props}
                                name={this.state.user.user.name}/>
                            }
                    />
                </nav>
                    
                <Route 
                    path={`/profile/:userName/animelist`}
                    render={(props) => <AnimeList {...props}
                        userData={this.state.userData}/>
                    }
                />
            </section>
        )
    }
}

export default Profile




