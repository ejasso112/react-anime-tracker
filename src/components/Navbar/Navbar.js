import React, { Component } from "react"
import { Link, NavLink, withRouter} from "react-router-dom"
import "./Navbar.scss"

class Navbar extends Component {
    constructor(props) {
        super()
        this.state = {
            user: props.user,
            isLight: props.isLight,
            value: ''
        }
    }

    handleSearch = event => {
        this.setState({value: event.target.value});
    }

    handleKeyPress = (target) => {
        if(target.charCode === 13){
            const { history } = this.props;
            history.push(`/search?search=${this.state.value}`)  
          }
    }
    render() {
        let mode = this.state.isLight ? "light":"dark"
        const isLoggedIn = this.state.user.isLoggedIn
        const user = this.state.user.user

        return (
            <div className={`navbar navbar--${mode}`}>
                <ul className={`navbar__links navbar__links--${mode}`}>
                    
                    <NavLink to={`/`} className={`navbar__links__logo navbar__links__logo--${mode}`}>AT</NavLink>
                    <NavLink to={`/anime`} className={`navbar__links__link navbar__links__link--${mode}`}>Anime</NavLink>
                    <NavLink to={`/manga`} className={`navbar__links__link navbar__links__link--${mode}`}>Manga</NavLink>
                </ul>
                <div className={`navbar__search navbar__search--${mode}`}>
                    <input className={`navbar__search__textfield navbar__search__textfield--${mode}`} type="text" placeholder="Search" onChange={this.handleSearch} onKeyPress={e => this.handleKeyPress(e)}/>
                    <Link to={`/search?search=${this.state.value}`} className={`navbar__search__search navbar__search__search--${mode}`}>
                        <svg className={`navbar__search__search__svg navbar__search__search__svg--${mode}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/></svg>
                    </Link>
                    <div className={`navbar__search__advSearch navbar__search__advSearch--${mode}`}>
                        <svg className={`navbar__search__advSearch__svg navbar__search__advSearch__svg--${mode}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" /></svg>
                    </div>
                </div>
                <div className={`navbar__account navbar__account--${mode}`}>
                    {isLoggedIn && <a className={`navbar__account__item navbar__account__item--${mode}`} href={'/auth/logout'}>Logout</a>}
                    {!isLoggedIn && <NavLink className={`navbar__account__item navbar__account__item--${mode}`} to={'/login'}>Log In</NavLink>}
                    {!isLoggedIn && <a className=" navbar__account__item navbar__account__item--active" href="https://anilist.co/signup" target="_blank" rel="noopener noreferrer">Sign Up</a>}
                    <NavLink className={`navbar__account__profile navbar__account__profile--${mode}`} to={isLoggedIn ? `/profile/${user.name}` : `/login`}>
                        <svg className={`navbar__account__profile__svg navbar__account__profile__svg--${mode}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default withRouter (Navbar)