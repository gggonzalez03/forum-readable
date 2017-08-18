import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import CategoriesList from './components/CategoriesList/CategoriesList'
import PostsList from './components/PostsList/PostsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/categories' component={CategoriesList} />
        <Route exact path='/' component={PostsList} />
      </div>
    );
  }
}

export default App;
