// Header Component
// --------------------------------------------------------

import React, { Component } from 'react';
import classname from 'classnames';
import { Link } from 'react-router-dom';
import './styles.scss';

// data dummy
import logoImageFixed from '../../../assets/images/logo/logo-yellow-fixed.svg';
import logoImage from '../../../assets/images/logo/logo.svg';

class Header extends Component {

  state = {
    showMobileNavigation: false,
    scrolled: false,
    isActive: 'homepage'
  };

  componentDidMount() {
    this.handleResizeWindow();
    window.addEventListener("resize", this.handleResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeWindow);
  }

  handleWindowScroll = () => {
    const scroll = window.scrollY;
    if (scroll === 0) {
      if (window.innerWidth <= 768) {
        this.setState({ scrolled: true });
      }
      else {
        this.setState({ scrolled: false });
      }
    }
    else {
      if (window.innerWidth <= 768) {
        this.setState({ scrolled: true });
      }
      else {
        if (scroll > 40) {
          this.setState({ scrolled: true });
        } else {
          this.setState({ scrolled: false });
        }
      }
    }
  };

  addMobileNavigation = () => {
    document.body.classList.toggle('remove-scroll');
    this.setState(prevState => ({
      showMobileNavigation: !prevState.showMobileNavigation
    }));
  }

  handleResizeWindow = () => {
    if (window.innerWidth <= 768) {
      this.setState({ scrolled: true });
    }
    else {
      this.setState({ scrolled: false });
      window.addEventListener('scroll', this.handleWindowScroll);
    }
  }

  handleClickNavigation = (e) => {
    const clicked = e.target.id;

    if (this.state.isActive === clicked) {
      this.setState({ isActive: clicked });
    } else {
      this.setState({ isActive: clicked })
    }
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
        <div className="container">
          <div className="navbar-logo">
            <a className="logo-image" href=".">
              <img src={logoImage} alt="navbar-logo" />
            </a>
            <a className="logo-image-fixed" href=".">
              <img src={logoImageFixed} alt="navbar-logo-fixed" /></a>
            <div className="hamburger-menu display-mobile-only" onClick={this.addMobileNavigation}><i>icon</i></div>
          </div>
          <div className="navbar-menu">
            <ul className="menu-content">
              <li className={`content-item ${this.state.isActive === "our-product" ? 'active' : ''}`}>
                <Link to='/our-product' id="our-product" onClick={this.handleClickNavigation}>Our Product</Link>
              </li>
              <li className={`content-item ${this.state.isActive === "contact-us" ? 'active' : ''}`}>
                <Link to='/contact-us' id="contact-us" onClick={this.handleClickNavigation}>Contact Us</Link>
              </li>
              <li className={`content-item ${this.state.isActive === "about-us" ? 'active' : ''}`}>
                <Link to='/about-us' id="about-us" onClick={this.handleClickNavigation}>About Us</Link >
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
