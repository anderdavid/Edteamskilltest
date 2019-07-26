import React, { Component } from 'react';

class Post extends React.Component{
    constructor(){
        super();
        this.state ={
            color :'amarillo'
        }
    }
    render(){
        return(
        <div class="mt-5 card">
            <div class="card-header">
                <div class="row">

                    <div class="col-md-10">
                        <h3>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
                    </div>
                    <div class="col-md-1">userId: 1</div>
                    <div class="col-md-1"></div>
                </div>
            </div>
            <div class="card-body">
                <p>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
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