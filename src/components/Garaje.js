import React, { Component } from 'react';

import Car from './Car';

class Garaje extends React.Component{
    super(){

    }
    render(){
        return <div>
            <h1>Soy Garaje y tengo carros</h1>
            <Car marca='mazda'/>
            <Car marca='Ford'/>
            <Car marca='landcrucer'/>
            <Car marca='Tucson'/>
        </div>;
    }
}

export default Garaje;