import React, { Component } from 'react';
import './styles.scss';


import { HeroBanner } from '../../../components';

class ContactUs extends Component {
  // state = {
  // };

  // componentDidMount() {
  // }

  // render
  render() {
    // const {
    //   // handleClosePage,
    //   // state: { showSteps }
    // } = this;

    return (
      <div className="p-contact-us">
        <HeroBanner bannerTitle="Contact Us"/>
      </div>
    );
  }
}


export default ContactUs;

