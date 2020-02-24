import React, { Component } from "react";
import {ContainerSearch} from '../style';
import Filter from './Filter';
import Search from './Search';

class SearchPanel extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ContainerSearch>
        <Search onSearch = {this.props.onSearch}/>
        <Filter generos = {this.props.generos} changeFilter={this.props.changeFilter}/>
      </ContainerSearch>
    );
  }
}

export default SearchPanel;
