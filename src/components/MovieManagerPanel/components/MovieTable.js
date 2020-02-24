import React,{Component} from 'react';
import {Table,Row} from '../style'
import MovieHeaderTable from './MovieHeaderTable'
import MovieRow from './MovieRow'



class MovieTable extends Component{
    constructor(){
        super()
    }

    render(){
        const {filter, search} = this.props;
        console.log(search)
        /*console.log(movies);*/
        const todas = this.props.movies.filter(mov => mov.title.includes(search) || mov.genre.includes(search)).filter(film => filter == 'all' || filter == film.genre).map((movi,i)=>{
            return <MovieRow title={movi.title}  _id={movi._id} genre={movi.genre}  key={movi._id}  removeMovie={this.props.removeMovie}/>
        })


        return(
            <Table>
                <MovieHeaderTable/>
                {todas}
             </Table>      
        )
    }
}

export default MovieTable;