import React from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './components/Post.js';

function App() {
  return (
    <div>
		<nav class="navbar navbar-expand-sm bg-primary">
			<h1 class="ml-5 mt-3 mb-4 text-white">EdTeam App</h1>
		</nav>
		<div class="container">
			<h1 class="mt-4 text-secondary">Posts:</h1>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
		</div>
    
	</div>

  
    
   
  );
}

export default App;
