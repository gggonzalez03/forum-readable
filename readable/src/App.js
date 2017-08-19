import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import CategoriesList from './components/CategoriesList/CategoriesList'
import CategoryPage from './components/CategoryPage/CategoryPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/categories' component={CategoriesList} />
        <Route exact path='/' component={CategoryPage} />
      </div>
    );
  }
}

export default App;
