
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import FadeIn from 'react-fade-in';
import './styles.scss';

import { ProductCard } from '../../../components';

// data dummy
import productImg1 from '../../../assets/images/dummy/product-card-1.jpeg';
import productImg2 from '../../../assets/images/dummy/product-card-2.jpeg';

class ProductCardList extends Component {
  render() {
    const {
      props: {
        className
      }
    } = this;
    const classNames = classname('ds-product-card-list', className);
    return (
      <FadeIn>
        <div className={classNames}>
          <ProductCard
            productImage={productImg1}
            productTitle='Lorem Ipsum 1'
          />
          <ProductCard
            productImage={productImg2}
            productTitle='Lorem Ipsum 2'
          />
          <ProductCard
            productImage={productImg1}
            productTitle='Lorem Ipsum 3'
          />
          <ProductCard
            productImage={productImg2}
            productTitle='Lorem Ipsum 4'
          />
          <ProductCard
            productImage={productImg1}
            productTitle='Lorem Ipsum 5'
          />
          <ProductCard
            productImage={productImg2}
            productTitle='Lorem Ipsum 6'
          />
        </div>
      </FadeIn>
    );
  }
}

ProductCardList.propTypes = {
  className: PropTypes.string
}

ProductCardList.defaultProps = {
  className: '',
}

export default ProductCardList;
