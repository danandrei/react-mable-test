import React, { Component } from 'react';
import ShopFilters from './ShopFilters';
import ShopList from './ShopList';

class ShopPage extends Component {

  render() {
    return (
      <div className="container m-t-50">
        <ShopFilters />
        <ShopList />
      </div>
    );
  }
}

export default ShopPage;
