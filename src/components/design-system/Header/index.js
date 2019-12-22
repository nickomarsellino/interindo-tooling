// Header Component
// --------------------------------------------------------

import React, { Component } from 'react';
import classname from 'classnames';
import './styles.scss';

// data dummy
import logoImageFixed from '../../../assets/images/logo/logo-fixed.svg';
import logoImage from '../../../assets/images/logo/logo.svg';

class Header extends Component {
 
  state = {
    showMobileNavigation: false,
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 40) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  addMobileNavigation = () => {
    document.body.classList.toggle('remove-scroll');
    this.setState(prevState => ({
      showMobileNavigation: !prevState.showMobileNavigation
    }));
  }

  render() {
    const {
      state: { showMobileNavigation, scrolled },
    } = this;

    const classNames = classname('ds-header', {
      'show-navigation': showMobileNavigation,
      'on-scroll': scrolled
    });

    return (
      <div className={classNames}>
        <div class="container">
          <div class="navbar-logo">
            <a class="logo-image" href=".">
              <img src={logoImage} alt="navbar-logo" />
            </a>
            <a class="logo-image-fixed" href=".">
              <img src={logoImageFixed} alt="navbar-logo-fixed" /></a>
            <div class="hamburger-menu display-mobile-only" onClick={this.addMobileNavigation}><i>icon</i></div>
          </div>
          <div class="navbar-menu">
            <ul class="menu-content">
              <li class="content-item active"><a class="active" href="/Home">Home</a></li>
              <li class="content-item"><a href="/Product">Our Product</a></li>
              <li class="content-item"><a href="/About-Us">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
