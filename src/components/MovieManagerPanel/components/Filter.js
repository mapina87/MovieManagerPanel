import React,{Component,PureComponent} from 'react';
import {FilterCategory} from '../style';

class Filter extends Component{
    constructor(){
        super()
        // this.state = {
        //     generos:[]
        // }
    }
    
    // mapGeneros = () => {
    //     const {movies} = this.props;
    //     const {generos} = this.state;
    //     movies.map(film => {
    //         if(!generos.some(gen => gen == film.genre))
    //              this.setState({generos:[...generos,film.genre]})
    //     })
    // }
    
    render(){
        const {generos} = this.props;
        return(
            
                <FilterCategory placeholder="Filter" onChange={e => this.props.changeFilter(e.target.value)}>
                   <option value='all'>Todas...</option>
                   {generos.map(genre =>{
                       return<option key={genre} value={genre}>{genre}</option>
                   })}
                </FilterCategory>
            
        )
    }
}

export default Filter;