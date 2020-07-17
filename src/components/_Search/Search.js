import React, { Component } from "react"
import Block from "../Block/Block"
import "./Search.scss"
class Search extends Component {
    render() {
        let mode = this.props.isLight ? "light":"dak"
        let params = require('query-string').parse(this.props.location.search)
        return(
            <section className={`section search search--${mode}`}>
                <div className="containerWrapper search__containerWrapper">
                    <div className="continer search__container">
                        <Block 
                            isLight={this.props.isLight}
                            params={{
                                page: 1,
                                perPage: 50,
                                search: params.search,
                            }}
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default Search