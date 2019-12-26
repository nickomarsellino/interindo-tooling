import React, { Component } from 'react';
import './styles.scss';


import { HeroBanner, ProductCardList, H2 } from '../../../components';

class HomePage extends Component {
  state = {
  };

  componentDidMount() {
  }

  // handleClosePage onClick
  handleClosePage = () => {

  };

  handleClickNavigation = (e) => {
    this.props.history.push({
      pathname: `/our-product`,
      state: {
        productId: "14045"
      }
    })
  }

  // render
  render() {
    // const {
    //   // handleClosePage,
    //   // state: { showSteps }
    // } = this;

    return (
      <div className="p-homepage">
        <HeroBanner bannerTitle="HomePage" />
        <li className="jjj" onClick={this.handleClickNavigation}>
          Our Product With history
        </li>
        <div>
          <div className='container'>
            <H2>Our Product</H2>
            <ProductCardList/>
          </div>
        </div>
      </div>
    );
  }
}


export default HomePage;

