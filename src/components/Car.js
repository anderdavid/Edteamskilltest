import React, { Component } from 'react';

class Car extends React.Component{
    constructor(){
        super();
        this.state ={
            color :'amarillo'
        }
    }
    render(){
        return <div>
        <h1>Datos del Carro</h1>
        <p>color: <span>{this.state.color}</span></p>
        <p>marca: <span>{this.props.marca}</span></p>
    </div>;
      
    }
}

export default Car;