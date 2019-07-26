import React, { Component } from 'react';

class Post extends React.Component{
    constructor(){
        super();
       
    }
    render(){
        return(
        <div class="mt-5 card">
            <div class="card-header">
                <div class="row">

                    <div class="col-md-10">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div class="col-md-1">{this.props.userId}</div>
                    <div class="col-md-1"></div>
                </div>
            </div>
            <div class="card-body">
                <p>{this.props.body}</p>
            </div> 
            <div class="card-footer">
                <button class="btn btn-success">Editar</button>
                <button class="ml-2 btn btn-danger">Eliminar</button>
            </div>
        </div>
        );
       
    
      
    }
}

export default Post;