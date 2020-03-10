
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import FadeIn from 'react-fade-in';
import './styles.scss';
import LazyLoad from 'react-lazyload';
import { ImageCard, ImageModal } from '../../../components';

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

    // console.log("INI DATAKU PROPSKU: ",data);

    return (
      <FadeIn>
        <div className={classNames}>
          {data.length > 0 ? (
            <Fragment>
              {data.map(image => {
                if(image.data.imageUrl === 'null'){
                  return (
                    <div></div>
                  )
                }
                else {
                  return (
                    <LazyLoad height={50} debounce={150} offset={50} key={image.data.imageUrl}>
                      <ImageCard
                        imageCard={image.data.imageUrl}
                        handleShowPopup={handleShowPopup}
                      />
                    </LazyLoad>
                  );
                }
              })}
            </Fragment>
          ) : (
              <center></center>
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
