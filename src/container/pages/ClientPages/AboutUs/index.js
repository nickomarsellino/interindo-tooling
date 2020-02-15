import React, { Component } from 'react';
import './styles.scss';

import { HeroBanner, Header, Footer, ContactUsButton } from '../../../../components';

class aboutUs extends Component {
  // state = {
  // };

  componentDidMount() {
    window.scrollTo(0,0)
  }

  // render
  render() {
    // const {
    //   // handleClosePage,
    //   // state: { showSteps }
    // } = this;

    return (
      <div className="p-about-us">
        <ContactUsButton/>
        <Header isActive='about-us'/>
        <HeroBanner bannerTitle="About Us" className='half'/>
        <Footer/>
      </div>
    );
  }
}


export default aboutUs;

