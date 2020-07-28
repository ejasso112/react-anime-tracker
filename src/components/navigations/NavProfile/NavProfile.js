import React, { Component } from "react"
import { Link } from "react-router-dom"

import "./NavProfile.scss"

class NavProfile extends Component {
    render() {
        return(
            <div className="navProfile">
                <Link className="navProfile__link" to={`/profile/${this.props.name}/animelist`}>Anime List</Link>
                <Link className="navProfile__link" to={`/profile/${this.props.name}/mangalist`}>Manga List</Link>
                <Link className="navProfile__link" to={`/profile/${this.props.name}/upcoming`}>Upcoming</Link>
            </div>         
        )
    }
}

export default NavProfile
