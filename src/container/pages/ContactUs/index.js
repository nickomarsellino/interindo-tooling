import React, { Component } from 'react';
import './styles.scss';


import { HeroBanner, Header, Footer, ContactUsButton } from '../../../components';

class ContactUs extends Component {
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
      <div className="p-contact-us">
        <ContactUsButton />
        <Header />
        <HeroBanner bannerTitle="Contact Us" />
        <Footer />
      </div>
    );
  }
}


export default ContactUs;

