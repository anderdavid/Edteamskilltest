import React from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './components/Post.js';
import Formulario from './components/Formulario.js';

import axios from 'axios';
import { extname } from 'path';

const API_URL = 'http://jsonplaceholder.typicode.com';


class App extends React.Component{

  state = {
    posts: []
  }

  constructor(){
    super();
  }

  componentDidMount() {

    const url = `${API_URL}/posts/`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ posts: data })
      console.log(this.state.post)
     })

  }

  render(){
   
      return (
        <div>
        <nav class="navbar navbar-expand-sm bg-primary">
          <h1 class="ml-5 mt-3 mb-4 text-white">EdTeam App</h1>
        </nav>
        <div class="container">
        <Formulario /><br/>
          <h1 class="mt-4 text-secondary">Posts:</h1>
          
          {this.state.posts.map((post) => (
           <div>
             <Post userId={post.userId}  title={post.title}  body={post.body}/>
           </div>
        ))}
       </div>
        
      </div>
    
      
        
       
      );
    
  }
}

export default App;
