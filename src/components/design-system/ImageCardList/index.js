
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import FadeIn from 'react-fade-in';
import './styles.scss';
import LazyLoad from 'react-lazyload';
import { ImageCard, ImageModal} from '../../../components';
import { Button } from 'semantic-ui-react';

// data dummy
import productImg1 from '../../../assets/images/dummy/product-card-1.jpeg';
import productImg2 from '../../../assets/images/dummy/product-card-2.jpeg';

class ImageCardList extends Component {

  // componentDidMount(){
  //   this.handleClickProductCard()
  // }

  // componentWillUnmount(){
  //   this.handleClickProductCard()
  // }

  state = {
    showPopup: false
  }

  handleShowPopup = (status) => {
    this.setState({
      showPopup: !status
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
        showPopup
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
          {/* {data.map((value, index) => (
            <ProductCard
              key={index}
              productId={value.productId}
              productImage={value.productImage}
              productTitle={value.productTitle}
            />
          ))} */}

          <LazyLoad height={150} debounce={150} offset={150}>
            <ImageCard
              imageId='product-1'
              imageCard={productImg1}
              handleShowPopup={handleShowPopup}
            />
          </LazyLoad>
          <LazyLoad height={150} debounce={150} offset={150}>
            <ImageCard
              imageId='product-1'
              imageCard={productImg2}
              onClick={() => handleShowPopup(showPopup)}
              handleShowPopup={handleShowPopup}
            />
          </LazyLoad>
          <LazyLoad height={150} debounce={150} offset={150}>
            <ImageCard
              imageId='product-1'
              imageCard={productImg1}
              handleShowPopup={handleShowPopup}
            />
          </LazyLoad>

          {/* <div className='view-more-wrapper'>
            <Button
              circular
              className='view-more-button'
              color='yellow'
              onClick={this.handleClickMoreButton}
            >
              View More
            </Button>
          </div> */}


          {/* Pop Up Image */}
          <ImageModal
            showPopup= {showPopup}
            handleClosePopup={handleClosePopup}
          />

        </div>
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
