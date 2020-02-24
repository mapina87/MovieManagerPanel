import React,{Component} from 'react';
import {Row,ColumnsRows,ColumnsAction,ButtonDelete,RowMovil,ButtonDeleteMovil,CardContainer} from '../style'

class MovieRow extends Component{
    constructor(){
        super()
    }

    handleRemoveMovie = (e)=>{
        e.preventDefault();
        this.props.removeMovie(this.props._id);
    }

    render(){
        return(
            <div>
                <Row>
                    <ColumnsRows>{this.props.title}</ColumnsRows>
                    <ColumnsRows>{this.props.genre}</ColumnsRows>
                    <ColumnsAction>
                        <ButtonDelete onClick = {this.handleRemoveMovie}>-</ButtonDelete>
                    </ColumnsAction>
                </Row>
                <RowMovil>
                    <CardContainer>
                        <strong>{this.props.title}</strong>
                        <span>{this.props.genre}</span>
                    </CardContainer>
                    <ButtonDeleteMovil onClick = {this.handleRemoveMovie}>-</ButtonDeleteMovil>
                </RowMovil>
            </div>
        )
    }
}

export default MovieRow;