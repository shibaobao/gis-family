import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory  } from 'react-router'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './configureStore';

require('./components/scss/App.scss');
import Header from './components/Header/header.jsx';
import Dashboard from './components/Dashboard/dashboard.jsx';
import Photos from './components/Photos/Photos.jsx';

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <Header title={"teste"} />
      <div className="body-container">
        <Router history={hashHistory}>
          <Route path="/" component={Dashboard}></Route>
          <Route path="/photos" component={Photos}></Route>
        </Router>
      </div>
    </div>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
