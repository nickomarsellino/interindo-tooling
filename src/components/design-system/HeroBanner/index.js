
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import FadeIn from 'react-fade-in';
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
    const divStyle = {
      backgroundImage: 'url(' + bannerImg + ')',
    };
    return (
      <FadeIn>
        <div className={classNames}>
          <div className="hero-banner-cover" style={divStyle} 
          src={bannerImage} 
          alt={bannerTitle}
          />
          <div className="container">
            <div className="content-item">
              <H1 color="white" weight='bold'>{bannerTitle}</H1>
            </div>
          </div>
        </div>
      </FadeIn>
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
