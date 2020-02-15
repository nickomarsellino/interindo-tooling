import React, { Component } from 'react';
import './styles.scss';

import { HeroBanner, ProductCardList, H2 } from '../../../../components';
import { Header, Footer, ContactUsButton, ImageCardList } from '../../../../components';

class HomePage extends Component {
  state = {
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }


  // handleClickNavigation = (e) => {
  //   this.props.history.push({
  //     pathname: `/our-product`,
  //     state: {
  //       productId: "14045"
  //     }
  //   })
  // }

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
        <HeroBanner bannerTitle="HomePage" className='half'/>

        <div className='about-us-section mt-24 mb-24'>
          <div className='section-background'  alt='about-us-background'></div>
          <div className='container'>
              <H2>About Us</H2>
              <p>Raven is young initiative command, which includes professionals of his activity. Each member of the commands, is not just an employee, they are something more valuable to us.  Penetrating into a fairly large and modern activity, the company Raven provides each time clearer and perfected solutions for the task.  Every employee of our company has a great experience in working with customers and solving tasks, while keeping unlimited energy and initiative.  Every client, who had come to us, did not left without a well-provided service.  Let us work together - you will not regret!</p>
          </div>
        </div>

        <div className='our-product-section'>
            <div class="curve curve-top"></div>
            {/* <div className='container'>
              <div className='header-section'>
                <li className="jjj" onClick={this.handleClickNavigation}>
                  Our Product With history
                </li>
                <H2>Our Product</H2>
              </div>
              <div className='content-section'>
                <ProductCardList history={this.props.history} />
              </div>
          </div> */}

          <div className='image-card pt-24'>
            <div className='container'>
              <ImageCardList 
                history={this.props.history}
                // data={dataJSON}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default HomePage;

