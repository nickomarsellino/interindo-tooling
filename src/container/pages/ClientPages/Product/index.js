import React, { Component, Fragment } from "react";
import "./styles.scss";
import {
  getDataFromAPI,
  getDetailProductImages
} from "../../../../config/redux/action";
import { connect } from "react-redux";
import {
  HeroBanner,
  Header,
  Footer,
  ContactUsButton,
  ImageCardList
} from "../../../../components";

class Product extends Component {
  state = {
    isActive: ""
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.location.state !== undefined) {
      console.log(
        "Data Dari Home Lempar Ke Page ini: ",
        this.props.location.state.productId
      );
    }
    //get Data From Firebase
    const user = "user";
    this.props.getNotes(user);
    this.getDetailData(this.props.getNotes(user));
  }

  getDetailImages = e => {
    const data = {
      category: e.id
    };
    //props redux
    this.props.showDetailProductImages(data);

    //handle active tab
    this.setState({ isActive: e.id });
  };


  //get Data When Fisrt Render but not dynamic
  getDetailData = e => {
    this.setState({ isActive: "Arbor" });
    const data = {
      category: "Arbor" 
    };
    this.props.showDetailProductImages(data);

    // e.then(function (result) {
    //   console.log(result.Arbor)
    // });

    // var first = e[0];
    // if(e.id !== undefined){
    //   const data = {
    //     category: e.id
    //   };
    //   this.props.showDetailProductImages(data);
    //   console.log(e.id)
    // }
  }

  // render
  render() {
    const {
      getDetailImages,
      state: { isActive },
      props: { notes, moreImage }
    } = this;

    return (
      <div className="p-product">
        <ContactUsButton />
        <Header isActive="our-product" />
        <HeroBanner bannerTitle="Our Product" className="half" />

        <div className="category-section-wrapper">
          <div className="container">
            <div className="category-menu-wrapper">
              <div className="category-menu">
                {notes.length !== 0 ? (
                  <Fragment>
                    {notes.map(data => {
                      return (
                        <div
                          className={`item-list ${
                            isActive === `${data.id}` ? "active" : ""
                            }`}
                          key={data.id}
                        >
                          <center>
                            <p
                              className="menu-item"
                              onClick={() => {
                                getDetailImages(data);
                              }}
                            >
                              {data.id}
                            </p>
                          </center>
                        </div>
                      );
                    })}
                  </Fragment>
                ) : (
                    <p>Loading...</p>
                  )}
              </div>
            </div>

            <div className="image-card">
              <ImageCardList data={moreImage} history={this.props.history} />
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
