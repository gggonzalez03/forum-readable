import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import SideBar from './components/SideBar/SideBar'
import CategoryPage from './components/CategoryPage/CategoryPage'
import PostItemDetailPage from './components/PostItemDetailPage/PostItemDetailPage'
import CategoryPostsHeader from './components/CategoryPostsHeader/CategoryPostsHeader'
import CategoriesList from './components/CategoriesList/CategoriesList'
import NoMatchRoutePage from './components/NoMatchRoutePage/NoMatchRoutePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={SideBar} />
        <Route path='/' component={CategoryPostsHeader} />
        <Switch>
          <Route exact path='/' component={CategoryPage} />
          <Route exact path='/notfound' component={NoMatchRoutePage}/>
          <Route exact path='/categories' component={CategoriesList} />
          <Route exact path='/:category' component={CategoryPage} />
          <Route exact path='/:category/:post_id' component={PostItemDetailPage} />
          <Route component={NoMatchRoutePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
