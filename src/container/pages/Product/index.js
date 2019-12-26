import React, { Component } from 'react';
import './styles.scss';


import { HeroBanner } from '../../../components';

class Product extends Component {
  // state = {
  // };

  // componentDidMount() {
  // }


  // render
  render() {
    console.log("Data Dari Home Lempar Ke Page ini: ",this.props.location);
    // const {
    //   // handleClosePage,
    //   // state: { showSteps }
    // } = this;

    return (
      <div className="p-product">
        <HeroBanner bannerTitle="Our Product"/>
      </div>
    );
  }
}


export default Product;

