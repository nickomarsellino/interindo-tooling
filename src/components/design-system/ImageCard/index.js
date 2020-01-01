
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import FadeIn from 'react-fade-in';
import './styles.scss';

class ImageCard extends Component {
  render() {
    const {
      props: {
        className,
        imageId,
        imageCard
      }
    } = this;
    const classNames = classname('ds-image-card', className);
    return (
      <FadeIn>
        <div className={classNames}>
          <div className='image-card-wrapper'>
            <img className='product-image' src={imageCard} alt={imageId} />
            <a className='click-area'>{imageId}</a>
          </div>
        </div>
      </FadeIn>
    );
  }
}

ImageCard.propTypes = {
  className: PropTypes.string,
  imageId: PropTypes.string,
  imageCard: PropTypes.string
}

ImageCard.defaultProps = {
  className: '',
  imageId: '',
  imageCard: ''
}

export default ImageCard;
