import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import classname from "classnames";
import FadeIn from "react-fade-in";
import "./styles.scss";
import LazyLoad from "react-lazyload";
import { ProductCard } from "../../../components";
import {
  getDataFromAPI,
  getDetailProductImages
} from "../../../config/redux/action";
import { connect } from "react-redux";

// data dummy
// import isLoading from "../../../assets/images/Loading.jpg";

class ProductCardList extends Component {
  handleClickProductCard = productId => {
    this.props.history.push({
      pathname: `/our-product`,
      state: {
        productId: productId
      }
    });
  };

  componentDidMount() {
    const user = "user";
    this.props.getNotes(user);
  }

  getDetail = e => {
    const data = {
      category: e.id
    };
    this.props.showDetailProductImages(data);
    console.log("E pas klik detail ", e);
  };

  render() {
    const {
      props: { className, notes, moreImage }
    } = this;
    const classNames = classname("ds-product-card-list", className);
    console.log(this.props.notes);
    return (
      <FadeIn>
        <div className="categoryMenu">
          {notes.length !== 0 ? (
            <Fragment>
              {notes.map(bebas => {
                return (
                  <div className="gridContainer" key={bebas.id}>
                    <div>
                      <p
                        style={{
                          cursor: "pointer",
                          backgroundColor: "cyan",
                          width: "-webkit-max-content" /* Chrome */
                        }}
                        onClick={() => {
                          this.getDetail(bebas);
                        }}
                      >
                        {bebas.id}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Fragment>
          ) : (
            <p>Tidak ada Dataaa</p>
          )}
        </div>
        <div className={classNames}>
          {moreImage.length > 0 ? (
            <Fragment>
              {moreImage.map(bebas => {
                return (
                  <LazyLoad height={300} debounce={150} offset={300}>
                    <ProductCard
                      // handleClickProductCard={this.handleClickProductCard}
                      productImage={bebas.data.imageUrl}
                      productTitle={bebas.data.title}
                    />
                  </LazyLoad>
                );
              })}
            </Fragment>
          ) : (       
            <p>INI LOADING</p>
          )}
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
    productTitle: PropTypes.string
  })
};

ProductCardList.defaultProps = {
  className: "",
  data: []
};

const reduxState = state => ({
  notes: state.notes,
  moreImage: state.moreImage
});

const reduxDispatch = dispatch => ({
  getNotes: data => dispatch(getDataFromAPI(data)),
  showDetailProductImages: data => dispatch(getDetailProductImages(data))
});

export default connect(reduxState, reduxDispatch)(ProductCardList);