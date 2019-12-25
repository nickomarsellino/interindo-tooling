// Header Component
// --------------------------------------------------------

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon,Button } from 'semantic-ui-react'
import './styles.scss';

import { H4 } from '../../../components';

// image
import logoImage from '../../../assets/images/logo/logo.svg';

class Header extends Component {

  // state = {

  // };

  render() {
    // const {
    //   state: { }
    // } = this;

    return (
      <div className="ds-footer">
        <div className="footer-section">
          <div className="container">
            <div class="footer-logo mb-24">
              <img src={logoImage} alt="footer-logo" />
            </div>
            <div class="menu-section">
              <div class="menu-column">
                <H4 className="list-title mb-12">Navigate</H4>
                <ul class="menu-list">
                  <li class="menu-item inline mb-8">
                    <a href="#">Our Product</a>
                  </li>
                  <li class="menu-item inline mb-8">
                    <a href="#">Contact Us</a>
                  </li>
                  <li class="menu-item inline mb-8">
                    <a href="#">About Us</a>
                  </li>
                </ul>
              </div>
              <div class="menu-column">
                <H4 className="list-title mb-12">Contact Us</H4>
                <ul class="menu-list">
                  <li class="menu-item display-desktop-only mb-8">
                    <Icon className="menu-icon" fitted name='map marker alternate' />
                    <a className="item" href="https://www.google.co.id/maps/place/PT+Interindo+Tooling/@-6.212859,106.5796336,12z/data=!4m8!1m2!2m1!1sinternindo+tooling!3m4!1s0x2e69fee3c2ce3e95:0x4f535926c0187aa3!8m2!3d-6.1869721!4d106.5989102">
                      Jalan Gatot Subroto Duta MAS Plaza No. G.-14 Cibodas Tangerang,
                      RT.007/RW.010, Sangiang Jaya, Kec. Periuk, Kota Tangerang, Banten 15132
                    </a>
                  </li>
                  <li class="menu-item display-mobile-only mb-8">
                  <Icon className="menu-icon" fitted name='map marker alternate' />
                    <a className="item" href="https://www.google.co.id/maps/place/PT+Interindo+Tooling/@-6.212859,106.5796336,12z/data=!4m8!1m2!2m1!1sinternindo+tooling!3m4!1s0x2e69fee3c2ce3e95:0x4f535926c0187aa3!8m2!3d-6.1869721!4d106.5989102">
                      <Button circular icon='external alternate' content='Get Direction' />
                    </a>
                  </li>
                  <li class="menu-item mb-8">
                    <Icon className="menu-icon" fitted name='whatsapp' />
                    <a className="item" href="http://bit.ly/2RTwvTi">
                      +62 81213745678
                    </a>
                  </li>
                  <li class="menu-item mb-8">
                    <Icon className="menu-icon" fitted name='fax' />
                    <a className="item" href="#">
                      (021) 73452996
                    </a>
                  </li>
                  <li class="menu-item mb-8">
                    <Icon className="menu-icon" fitted name='mail outline' />
                    <a className="item" href="mailto:Christian.Irwandi@inphosoft.com">
                      pt.interindo.tooling@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div class="menu-column">
                <H4 className="list-title mb-12">About Us</H4>
                <ul class="menu-list">
                  <li class="menu-item mb-8">
                    <a href="#">
                    All rights reservedAll rights reservedAll rights reservedAll rights reservedAll rights reserved
                    All rights reservedAll rights reservedAll rights reservedAll rights reservedAll rights reserved
                    All rights reservedAll rights reservedAll rights reserved.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-section">
          <div className="container">
            <p>Copyright © 2019 PT.Interindo Tooling | All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
