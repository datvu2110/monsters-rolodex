import React, {Component} from 'react'
import './searchbox.css'
class SearchBox extends React.Component{
    render(){
        return(
            <input className="search" type='search' placeholder='Search Monster' onChange={this.props.onSearchChange} />
        )
    }
}

export default SearchBox