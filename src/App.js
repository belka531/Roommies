import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import UserSelectorContainer from './components/UserSelectorContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="Roommie-app">
      <Route exact path="/" component={UserSelectorContainer} />
      </div>
      </Provider>
    
    );
  }
}

export default App;


//<Route exact path="/:id" component={"test"} /> 