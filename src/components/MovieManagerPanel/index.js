import React,{Component} from 'react';
import {ContainerMovieManager,Form} from './style';
import SearchPanel from './components/SearchPanel'
import FormPanel from './components/FormPanel'
import MovieTable from './components/MovieTable'

import {movies} from '../../movies.json'

class MovieManagerPanel extends Component{
    constructor(){
        super();
        this.state = {
            movies,
            generos:['Mistery','Action'],
            filter:'all',
            search:''
        };
    }

    
    addMovie = (movie)=>{
        const {movies,generos} = this.state;
        if(!movies.some(e=> e.title==movie.title)){
            this.setState({
                movies:[...movies, Object.assign({},movie,{_id: movie.title})]
            });

           
            if(!generos.some(gen => gen == movie.genre))
                this.setState({generos:[...generos,movie.genre]})
           

        }else{
            alert('Ya existe la pelicula')
        }    

        this.render();
    };

    removeMovie = (_id)=>{
        this.setState({
            movies:this.state.movies.filter((movi,i)=>{
                return movi._id !== _id;
            })    
        },()=>{
            console.log(this.state.movies)
        });
    };

    searchMovie = (text)=> {
        this.setState({
           search:text  
        });
    };

    changeFilter = filter => {
            this.setState({filter:filter})
    }

    render(){
        const {filter,search} = this.state;
        return(
            <ContainerMovieManager>
                <SearchPanel onSearch = {this.searchMovie} generos = {this.state.generos} changeFilter={this.changeFilter}/>
                <FormPanel onAddMovie = {this.addMovie}/>
                <MovieTable movies = {this.state.movies} filter={filter} search={search} removeMovie = {this.removeMovie}/>
            </ContainerMovieManager>
        );
    }
}

export default MovieManagerPanel;
