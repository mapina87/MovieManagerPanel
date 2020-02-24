import React,{Component} from 'react';
import {HeaderTable,ColumnsRows,} from '../style'

class MovieHeaderTable extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <HeaderTable>
                <ColumnsRows>Movies</ColumnsRows>
                <ColumnsRows>Genre</ColumnsRows>
            </HeaderTable>
        )
    }
}

export default MovieHeaderTable;