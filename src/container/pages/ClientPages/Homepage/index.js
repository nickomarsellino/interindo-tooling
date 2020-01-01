import React, { Component } from 'react';
import './styles.scss';

import { HeroBanner, ProductCardList, H2 } from '../../../../components';
import { Header, Footer, ContactUsButton } from '../../../../components';

class HomePage extends Component {
  state = {
  };

  componentDidMount() {
    window.scrollTo(0,0);
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
        <ContactUsButton />
        <Header />
        <HeroBanner bannerTitle="HomePage" />
        <li className="jjj" onClick={this.handleClickNavigation}>
          Our Product With history
        </li>
        <div className='product-wrapper'>
          <div className='container'>
            <H2>Our Product</H2>
            <ProductCardList history={this.props.history} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default HomePage;

