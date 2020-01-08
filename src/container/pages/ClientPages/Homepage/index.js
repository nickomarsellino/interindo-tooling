import React, { Component } from 'react';
import './styles.scss';
import bannerProduct from '../../../../assets/images/dummy/hero-banner.jpg';

import { HeroBanner, ProductCardList, H2 } from '../../../../components';
import { Header, Footer, ContactUsButton } from '../../../../components';

class HomePage extends Component {
  state = {
  };

  componentDidMount() {
    window.scrollTo(0, 0);
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
    const ourProductBg = {
      backgroundImage: 'url(' + bannerProduct + ')',
    };
    return (
      <div className="p-homepage">
        <ContactUsButton />
        <Header />
        <HeroBanner bannerTitle="HomePage" />

        <div className='about-us-section'>
        <div className='container'>
            <div className='header-section'>
              <H2>About Us</H2>
            </div>
            <div className='content-section'>
              <p>Raven is young initiative command, which includes professionals of his activity. Each member of the commands, is not just an employee, they are something more valuable to us.  Penetrating into a fairly large and modern activity, the company Raven provides each time clearer and perfected solutions for the task.  Every employee of our company has a great experience in working with customers and solving tasks, while keeping unlimited energy and initiative.  Every client, who had come to us, did not left without a well-provided service.  Let us work together - you will not regret!</p>
            </div>
          </div>
        </div>

        <div className='our-product-section'>
          {/* <div className='section-background' style={ourProductBg} alt='product-background'></div> */}
          <div class="curve curve-top"></div>
          <div class="curve curve-bottom"></div>
          <div className='container'>
            <div className='header-section'>
              <li className="jjj" onClick={this.handleClickNavigation}>
                Our Product With history
              </li>
              <H2>Our Product</H2>
            </div>
            <div className='content-section'>
              <ProductCardList history={this.props.history} />
            </div>
          </div>
        </div>

        <div className='about-us-section'></div>
        <Footer />
      </div>
    );
  }
}


export default HomePage;

