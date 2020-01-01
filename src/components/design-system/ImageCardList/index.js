
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import FadeIn from 'react-fade-in';
import './styles.scss';
import LazyLoad from 'react-lazyload';
import { ImageCard } from '../../../components';

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

  render() {
    const {
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

          <LazyLoad height={300} debounce={150} offset={300}>
            <ImageCard
              imageId='product-1'
              imageCard={productImg1}
            />
          </LazyLoad>
          <LazyLoad height={300} debounce={150} offset={300}>
            <ImageCard
              imageId='product-1'
              imageCard={productImg2}
            />
          </LazyLoad>
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
