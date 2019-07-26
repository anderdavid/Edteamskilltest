import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Car from './components/Car';
import Garaje from './components/Garaje';

const helloWorldElement =<h1>Hello World</h1>;

class GreenCar extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <h1>Soy un carro verde</h1>;
    }
}

class BlueCar extends React.Component{
    constructor(){
        super();
        this.state ={
            color:'azul'
        }
    }
    render(){
        return <h1>Soy un carro de color {this.state.color} </h1>
    }
}

class RedCar extends React.Component{
    constructor(){
        super();

        this.state ={
            color:'rojo'
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

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(helloWorldElement, document.getElementById('root'));
//ReactDOM.render(<GreenCar />, document.getElementById('root'));
//ReactDOM.render(<RedCar marca='ford'/>, document.getElementById('root'));
ReactDOM.render(<Car marca='mazda'/>, document.getElementById('root'));
ReactDOM.render(< Garaje/>, document.getElementById('root'));




serviceWorker.unregister();
