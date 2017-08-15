import React, { Component } from 'react';
import './App.css';

import CategoriesList from './components/CategoriesList/CategoriesList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CategoriesList/>
      </div>
    );
  }
}

export default App;
