import React, { Component } from 'react';

class Formulario extends React.Component{
    constructor(){
        super();
        this.state ={
            color :'amarillo'
        }
    }
    render(){
        return(
        <div class='mt-5 mb-5 pl-10 card bg-light'>
		<h3>Crear nuevo post </h3>
		<form>
			<div class="form-group">
				<label type="text" for="userId">userId:</label>
				<input class="form-control" name="userId" placeholder="userId" required="true"></input>
			</div>
            <div class="form-group">
				<label type="text" for="title">title</label>
				<input class="form-control" name="title" placeholder="title" required="true"></input>
		    </div>
            <div class="form-group">
                    <label for="body">Body</label>
                    <input type="textarea" class="form-control" name="body" placeholder="body" required="true"></input>
            </div>
            <button type="submit" class="btn btn-success">Crear</button>
		</form>
		
	</div>
        );
       
    
      
    }
}

export default Formulario;