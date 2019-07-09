import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';

import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header></Header>
      </Provider>
    )
  }
}

