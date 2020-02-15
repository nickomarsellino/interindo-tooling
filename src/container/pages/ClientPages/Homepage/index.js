import React, { Component } from 'react';
import './styles.scss';
import bannerProduct from '../../../../assets/images/dummy/hero-banner.jpg';
import aboutUsBg from '../../../../assets/images/dummy/wave-bg.png';

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
    const aboutUs = {
      backgroundImage: 'url(' + aboutUsBg + ')',
    };

    return (
      <div className="p-homepage">
        <ContactUsButton />
        <Header />
        <HeroBanner bannerTitle="HomePage" />

        <div className='about-us-section mt-24 mb-24'>
          <div className='section-background'  alt='about-us-background'></div>
          <div className='container'>
              <H2>About Us</H2>
              <p>Raven is young initiative command, which includes professionals of his activity. Each member of the commands, is not just an employee, they are something more valuable to us.  Penetrating into a fairly large and modern activity, the company Raven provides each time clearer and perfected solutions for the task.  Every employee of our company has a great experience in working with customers and solving tasks, while keeping unlimited energy and initiative.  Every client, who had come to us, did not left without a well-provided service.  Let us work together - you will not regret!</p>
          </div>
        </div>

        <div className='our-product-section'>
          {/* <div className='section-background' style={ourProductBg} alt='product-background'></div> */}
            <div class="curve curve-top"></div>
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

        <div className='contact-us-section'>
          <div class="curve curve-top grey-bg"></div>
          <div class="curve curve-bottom"></div>
          <div className='contact-us-maps'>
              <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126924.31750849163!2d106.5796336!3d-6.212859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fee3c2ce3e95%3A0x4f535926c0187aa3!2sPT%20Interindo%20Tooling!5e0!3m2!1sen!2sid!4v1577509254511!5m2!1sen!2sid" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default HomePage;

