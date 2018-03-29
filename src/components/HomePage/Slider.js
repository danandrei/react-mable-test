import React, { Component } from 'react';
import SlickSlider from 'react-slick';

class Slider extends Component {
  render () {
    const settings = {
      arrows: true
    };
    return (
      <SlickSlider {...settings}>
        <div className="slide-1"></div>
        <div className="slide-2"></div>
      </SlickSlider>
    );
  }
}

export default Slider;
