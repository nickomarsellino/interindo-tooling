import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import FadeIn from 'react-fade-in';
import './styles.scss';

import logoImage from '../../../assets/images/logo/logo-yellow-fixed.svg';
import { HeroBanner, Header, Footer, ContactUsButton } from '../../../components';

class ContactUs extends Component {
  // state = {
  // };

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  // render
  render() {
    // const {
    //   // handleClosePage,
    //   // state: { showSteps }
    // } = this;

    return (
      <FadeIn>
        <div className="p-contact-us">
          <ContactUsButton />
          <Header isActive='contact-us' />
          <HeroBanner bannerTitle="Contact Us" />
          <div className='container contact-us-wrapper'>
            <div className='contact-us-information'>
              <div className="contact-us-logo">
                <img src={logoImage} alt="contact-us-logo" />
              </div>
              <ul className='contact-us-list'>
                <li className='contact-us-item'>
                  <p>
                    Feel free to get in touch with us. We would be happy to answer your question and business inquiries.
                </p>
                </li>
                <li className='contact-us-item'>
                  <p className='item-title'>Email:</p>
                  <a href="mailto:Christian.Irwandi@inphosoft.com">
                    <Icon fitted name='mail outline' /> pt.interindo.tooling@gmail.com
                  <Icon fitted name='external alternate' size='tiny' className='clickable' />
                  </a>
                </li>
                <li className='contact-us-item'>
                  <p className='item-title'>Phone:</p>
                  <a href="tel:02173452996">
                    <Icon fitted name='fax' /> (021) 73452996
                  <Icon fitted name='external alternate' size='tiny' className='clickable' />
                  </a>
                </li>
                <li className='contact-us-item'>
                  <p className='item-title'>WhatsApp:</p>
                  <a href="http://bit.ly/2RTwvTi">
                    <Icon fitted name='whatsapp' /> +62 81213745678
                  <Icon fitted name='external alternate' size='tiny' className='clickable' />
                  </a>
                </li>
                <li className='contact-us-item'>
                  <p className='item-title'>Our Location:</p>
                  <a href="https://www.google.co.id/maps/place/PT+Interindo+Tooling/@-6.212859,106.5796336,12z/data=!4m8!1m2!2m1!1sinternindo+tooling!3m4!1s0x2e69fee3c2ce3e95:0x4f535926c0187aa3!8m2!3d-6.1869721!4d106.5989102">
                    Jalan Gatot Subroto Duta MAS Plaza No. G.-14 Cibodas Tangerang,
                    RT.007/RW.010, Sangiang Jaya, Kec. Periuk, Kota Tangerang, Banten 15132
                </a>
                </li>
                <li className="contact-us-item display-mobile-only">
                  <a className="item" href="https://www.google.co.id/maps/place/PT+Interindo+Tooling/@-6.212859,106.5796336,12z/data=!4m8!1m2!2m1!1sinternindo+tooling!3m4!1s0x2e69fee3c2ce3e95:0x4f535926c0187aa3!8m2!3d-6.1869721!4d106.5989102">
                    <Button circular icon='external alternate' color='yellow' content='Get Direction' />
                  </a>
                </li>
              </ul>
            </div>
            <div className='contact-us-maps'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126924.31750849163!2d106.5796336!3d-6.212859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fee3c2ce3e95%3A0x4f535926c0187aa3!2sPT%20Interindo%20Tooling!5e0!3m2!1sen!2sid!4v1577509254511!5m2!1sen!2sid" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
            </div>

          </div>
          <Footer />
        </div>
      </FadeIn>
    );
  }
}


export default ContactUs;

