
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
  
  componentDidMount() {
    const user = "user";
    this.props.getNotes(user);
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

  getDetail = e => {
    const data = {
      category: e.id
    };
    this.props.showDetailProductImages(data);
    console.log("E pas klik detail ", e);
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
        data,
        notes,
        moreImage,

      }
    } = this;
    const classNames = classname('ds-image-card-list', className);

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
                    <ImageCard
                      // imageId='product-1'
                      imageCard={bebas.data.imageUrl}
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

const reduxState = state => ({
  notes: state.notes,
  moreImage: state.moreImage
});

const reduxDispatch = dispatch => ({
  getNotes: data => dispatch(getDataFromAPI(data)),
  showDetailProductImages: data => dispatch(getDetailProductImages(data))
});

export default connect(reduxState, reduxDispatch)(ImageCardList);
