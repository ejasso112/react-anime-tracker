import React, { Component } from "react"
import getUserMediaList from "../../actions/getUserMediaList"
import MediaListTable from "../../components/displayMedia/MediaListTable/MediaListTable"

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
        const UserAnimeListNames = this.state.isUserLoaded && this.state.userData.ANIME.lists.map((listEntry, i) => 
            <MediaListTable key={i} title={listEntry.name} entries={listEntry.entries}/>
        )
        return(
            <>
                <header>
                    <h1>Welcome to your Profile</h1>
                </header>
                <main>
                    {UserAnimeListNames}
                </main>
            </>
        )
    }
}

export default Profile




