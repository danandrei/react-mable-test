import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import { history } from '../../helpers/';
import HomePage from '../HomePage/';
import ShopPage from '../ShopPage/';
import LoginPage from '../LoginPage';
import Navbar from '../Navbar/';
import './index.scss';


class App extends Component {

  render() {
    return (
      <div className='content-wrap'>
        <Navbar />
        <Router history={ history }>
          <div className='content'>
            <Route exact path='/' component={HomePage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/shop' component={ShopPage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
