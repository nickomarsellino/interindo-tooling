
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import FadeIn from 'react-fade-in';
import './styles.scss';
import LazyLoad from 'react-lazyload';
import { ImageCard, ImageModal } from '../../../components';
import { Button } from 'semantic-ui-react';
import {
  getDataFromAPI,
  getDetailProductImages
} from "../../../config/redux/action";
import { ProductCard } from "../../../components";
import { connect } from "react-redux";


// data dummy
import productImg1 from '../../../assets/images/dummy/product-card-1.jpeg';
import productImg2 from '../../../assets/images/dummy/product-card-2.jpeg';

class ImageCardList extends Component {

  state = {
    showPopup: false,
    handleImageClicked: ''
  }

  handleShowPopup = (status, imageData) => {
    this.setState({
      showPopup: !status,
      handleImageClicked: imageData
    });
  };

  handleClosePopup = (status) => {
    this.setState({
      showPopup: !status
    });
  };

  render() {
    const {
      handleShowPopup,
      handleClosePopup,
      state: {
        showPopup,
        handleImageClicked
      },
      props: {
        className,
        data
      }
    } = this;
    const classNames = classname('ds-image-card-list', className);

    return (
      <FadeIn>
        <div className={classNames}>
          {data.length > 0 ? (
            <Fragment>
              {data.map(image => {
                return (
                  <LazyLoad height={50} debounce={150} offset={50} key={image.data.imageUrl}>
                    <ImageCard
                      // imageId='product-1'
                      imageCard={image.data.imageUrl}
                      handleShowPopup={handleShowPopup}
                    />
                  </LazyLoad>
                );
              })}
            </Fragment>
          ) : (
              <p>INI LOADING</p>
            )}
        </div>

        {/* Pop Up Image */}
        <ImageModal
          image={handleImageClicked}
          showPopup={showPopup}
          handleClosePopup={handleClosePopup}
        />
      </FadeIn>
    );
  }
}

ImageCardList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    imageId: PropTypes.string,
    imageCard: PropTypes.string,
  })
}

ImageCardList.defaultProps = {
  className: '',
  data: [],
}

export default ImageCardList;
