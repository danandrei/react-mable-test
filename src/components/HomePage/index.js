import React, { Component } from 'react';
import Slider from './Slider';

class HomePage extends Component {

  render() {
    return (
      <div className="height-100 text-center">
        <Slider />
        <a className="shop-link-button"><span>visit our shop</span> <i className="material-icons">keyboard_arrow_right</i></a>
        <span className="mable-copy">Mable Test 2016</span>
      </div>
    );
  }
}

export default HomePage;
