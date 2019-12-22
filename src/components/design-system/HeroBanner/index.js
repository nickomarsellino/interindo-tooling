
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

// data dummy
import bannerImg from '../../../assets/images/dummy/hero-banner.jpg';

class HeroBanner extends Component {
  render() {
    const {
      props: {
        className,
        bannerImage
      }
    } = this;
    const classNames = classname('ds-hero-banner', className);
    return (
      <div className={classNames}>
        <img class="hero-banner-cover" src={bannerImage} alt="Image Title" />
        <div class="container"></div>
      </div>
    );
  }
}

HeroBanner.propTypes = {
  className: PropTypes.string,
  bannerImage: PropTypes.string,
}

HeroBanner.defaultProps = {
  className: '',
  bannerImage: bannerImg,
}

export default HeroBanner;
