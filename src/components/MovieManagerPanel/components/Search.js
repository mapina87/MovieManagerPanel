import React, { Component } from "react";
import {SearchName} from '../style'

class Search extends Component { 
  constructor() {
    super();

  }

  render() {
    return (
            <SearchName type="text" placeholder='Search' onChange = {e=>this.props.onSearch(e.target.value)}/>
        );
  }
}

export default Search;
