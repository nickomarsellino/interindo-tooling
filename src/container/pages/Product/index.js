import React, { Component } from 'react';
import './styles.scss';


import { HeroBanner } from '../../../components';

class Product extends Component {
  state = {
  };

  componentDidMount() {
  }

  // handleClosePage onClick
  handleClosePage = () => {

  };

  // render
  render() {
    const {
      // handleClosePage,
      // state: { showSteps }
    } = this;

    return (
      <div className="p-product">
        <HeroBanner bannerTitle="Out Product"/>
      </div>
    );
  }
}


export default Product;

