
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


  handleClickProductCard = (productId) => {
    this.props.history.push({
      pathname: `/our-product`,
      state: {
        productId: productId
      }
    })
  }

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
    const classNames = classname('ds-product-card-list', className);
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
          <ProductCard
            handleClickProductCard={this.handleClickProductCard}
            productId='product-1'
            productImage={productImg1}
            productTitle='Lorem Ipsum 1'
          />
          <ProductCard
            handleClickProductCard={this.handleClickProductCard}
            productId='product-2'
            productImage={productImg2}
            productTitle='Lorem Ipsum 2'
          />
          <ProductCard
            handleClickProductCard={this.handleClickProductCard}
            productId='product-3'
            productImage={productImg1}
            productTitle='Lorem Ipsum 3'
          />
          <ProductCard
            handleClickProductCard={this.handleClickProductCard}
            productId='product-4'
            productImage={productImg2}
            productTitle='Lorem Ipsum 4'
          />
          <ProductCard
            handleClickProductCard={this.handleClickProductCard}
            productId='product-5'
            productImage={productImg1}
            productTitle='Lorem Ipsum 5'
          />
          <ProductCard
            handleClickProductCard={this.handleClickProductCard}
            productId='product-6'
            productImage={productImg2}
            productTitle='Lorem Ipsum 6'
          />
        </div>
      </FadeIn>
    );
  }
}

ProductCardList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    productId: PropTypes.string,
    productImage: PropTypes.string,
    productTitle: PropTypes.string,
  })
}

ProductCardList.defaultProps = {
  className: '',
  data: [],
}

export default ProductCardList;
