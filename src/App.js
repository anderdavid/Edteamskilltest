import React from 'react';
import logo from './logo.svg';
import './App.css';

import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
            <ShoppingCart />
            <br/> <br/>
           <ProductList />
           

     </div>
    );
  }
}

export default App;
