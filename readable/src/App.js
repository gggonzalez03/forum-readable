import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import CategoriesList from './components/CategoriesList/CategoriesList'
import CategoryPage from './components/CategoryPage/CategoryPage'
import PostItemDetailPage from './components/PostItemDetailPage/PostItemDetailPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/categories' component={CategoriesList} />
          <Route exact path='/' component={CategoryPage} />
          <Route exact path='/:category' component={CategoryPage} />
          <Route exact path='/:category/:post_id' component={PostItemDetailPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
