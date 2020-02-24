import React,{Component} from 'react';
import {Form,NameData,GenreData,Button,ButtonMovil} from '../style';

class FormPanel extends Component{
    constructor(){
        super();
        this.state = {
            title:'',
            genre:''
        };
    }

    handleInput = (e)=>{
        const {value,name} = e.target;
        this.setState({
            [name]:value
        });
        //console.log(this.state);
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.state.title === '' || this.state.genre === ''){
            alert('Alerta, faltan datos por llenar.');
        }else{
            this.props.onAddMovie(this.state);
        }
            
        
    }
 
    render(){
        return(
            <Form onSubmit = {this.handleSubmit }>
                    <NameData type='text' placeholder='Movie' name='title' onChange = {this.handleInput}/>
                    <GenreData type='text' placeholder='Genre' name='genre' onChange = {this.handleInput}/>
                    <Button type="submit">+</Button>
                    <ButtonMovil type="submit">Add</ButtonMovil>
            </Form>   
        )
    }
}

export default FormPanel; 