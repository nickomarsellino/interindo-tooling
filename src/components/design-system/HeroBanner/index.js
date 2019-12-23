
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import Fade from 'react-reveal/Fade';
import './styles.scss';

import { H1 } from '../../../components';

// data dummy
import bannerImg from '../../../assets/images/dummy/hero-banner.jpg';

class HeroBanner extends Component {
  render() {
    const {
      props: {
        className,
        bannerImage,
        bannerTitle
      }
    } = this;
    const classNames = classname('ds-hero-banner', className);
    return (
      <Fade>
        <div className={classNames}>
          <img class="hero-banner-cover" src={bannerImage} alt="Image Title" />
          <div class="container">
            <div className="content-item">
              <H1 color="white" weight='light'>{bannerTitle}</H1>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

HeroBanner.propTypes = {
  className: PropTypes.string,
  bannerImage: PropTypes.string,
  bannerTitle: PropTypes.string,
}

HeroBanner.defaultProps = {
  className: '',
  bannerImage: bannerImg,
  bannerTitle: '',
}

export default HeroBanner;
