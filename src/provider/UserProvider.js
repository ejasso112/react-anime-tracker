import React, { Component } from 'react'

export const UserContext = React.createContext()

class UserProvider extends Component {
    state = {
        user: null,
        isLoaded: false
    };

    async componentDidMount() {
        try {
            
            console.log("here")
            const response = await fetch(`/user`);
            const json = await response.json();
            console.log(json)
            this.setState({
                user: json,
                isLoaded: true
            });
        } 
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (this.state.isLoaded &&
            <UserContext.Provider value={{ user: this.state.user }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;