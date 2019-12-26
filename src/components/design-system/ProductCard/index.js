
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import FadeIn from 'react-fade-in';
import './styles.scss';

import { H3 } from '../../../components';
import { Button } from 'semantic-ui-react'

// data dummy
import productImg from '../../../assets/images/dummy/hero-banner.jpg';

class ProductCard extends Component {
  render() {
    const {
      props: {
        className,
        productId,
        productImage,
        productTitle,
        handleClickProductCard
      }
    } = this;
    const classNames = classname('ds-product-card', className);
    return (
      <FadeIn>
        <div className={classNames} onClick={handleClickProductCard(productId)}>
          <div className='product-card-wrapper'>
            <img className='product-image' src={productImage} alt={productTitle} />
            <a className='click-area'>{productTitle}</a>
            <div className='product-information'>
              <H3 color='white' className='product-title' >{productTitle}</H3>
            </div>
            <Button circular className='view-more-button' color='yellow'>View More</Button>
          </div>
        </div>
      </FadeIn>
    );
  }
}

ProductCard.propTypes = {
  className: PropTypes.string,
  productId: PropTypes.string,
  productImage: PropTypes.string,
  productTitle: PropTypes.string,
  handleClickProductCard: PropTypes.func,
}

ProductCard.defaultProps = {
  className: '',
  productId: '',
  productImage: '',
  productTitle: '',
  handleClickProductCard: () => { },
}

export default ProductCard;
