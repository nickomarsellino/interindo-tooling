import React, { Component, Fragment } from 'react';
import './styles.scss';
import {
  getDataFromAPI,
  getDetailProductImages
} from "../../../../config/redux/action";
import { Icon } from 'semantic-ui-react';
import { connect } from "react-redux";
import { HeroBanner, Header, Footer, ContactUsButton, ImageCardList } from '../../../../components';

class Product extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    if (this.props.location.state !== undefined) {
      console.log("Data Dari Home Lempar Ke Page ini: ", this.props.location.state.productId);
    }
    //get Data From Firebase
    const user = "user";
    this.props.getNotes(user);
  }

  getDetailImages = e => {
    const data = {
      category: e.id
    };
    //props redux
    this.props.showDetailProductImages(data);
  };

  // render
  render() {
    const {
      getDetailImages,
      props: {
        notes,
        moreImage,
      }
    } = this;

    return (
      <div className="p-product">
        <ContactUsButton />
        <Header isActive='our-product' />
        <HeroBanner bannerTitle="Our Product" className='half' />

        <div className="category-section-wrapper">
          <div className="container">
            <div className="category-menu-wrapper">
              <div className="category-menu">
                {notes.length !== 0 ? (
                  <Fragment>
                    {notes.map(data => {
                      return (
                        <div className="item-list" key={data.id}>
                          <p
                            className="menu-item"
                            onClick={() => {
                              getDetailImages(data);
                            }}
                          >
                            {data.id}
                          </p>
                        </div>
                      );
                    })}
                  </Fragment>
                ) : (
                    <p>Tidak ada Dataaa</p>
                  )}
              </div>
            </div>


            <div className='image-card'>
              <ImageCardList
                data={moreImage}
                history={this.props.history}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const reduxState = state => ({
  notes: state.notes,
  moreImage: state.moreImage
});

const reduxDispatch = dispatch => ({
  getNotes: data => dispatch(getDataFromAPI(data)),
  showDetailProductImages: data => dispatch(getDetailProductImages(data))
});

export default connect(reduxState, reduxDispatch)(Product);
