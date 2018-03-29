import React, { Component } from 'react';

class ShopItem extends Component {

  render() {
    return (
      <div className='col-sm-4 col-md-3 m-t-15'>
        <div className="shop-item">
          <div className="shop-item-header">
            Cool hammer 200
          </div>
          <div className="shop-item-content">

          </div>
          <div className="shop-item-footer">
            <div className="shop-item-price">
              $500
            </div>
            <a className="shop-item-action">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopItem;
