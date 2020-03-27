
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
        namaProduct,
        imageCard,
        handleShowPopup
      }
    } = this;
    const classNames = classname('ds-image-card', className);
    return (
      <FadeIn>
        <div className={classNames}>
          <div className='image-card-wrapper'>
          <p className="title">{namaProduct}</p>
            <img className='product-image' src={imageCard} alt={imageId} />
            <a className='click-area' onClick={() => handleShowPopup(false, imageCard)}>{imageId}</a>
          </div>
        </div>
      </FadeIn>
    );
  }
}

ImageCard.propTypes = {
  className: PropTypes.string,
  imageId: PropTypes.string,
  imageCard: PropTypes.string,
  handleShowPopup: PropTypes.func,
}

ImageCard.defaultProps = {
  className: '',
  imageId: '',
  imageCard: '',
  handleShowPopup: () => { }

}

export default ImageCard;
