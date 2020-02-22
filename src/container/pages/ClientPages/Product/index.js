import React, { Component, Fragment } from 'react';
import './styles.scss';
import {
  getDataFromAPI,
  getDetailProductImages
} from "../../../../config/redux/action";
import { Tab } from 'semantic-ui-react';
import { connect } from "react-redux";
import { HeroBanner, Header, Footer, ContactUsButton, ImageCardList } from '../../../../components';

class Product extends Component {
  state = {
    panes: [
      {
      menuItem: ''
      }
    ]
  };

  componentDidMount() {
    window.scrollTo(0, 0)
    if (this.props.location.state !== undefined) {
      console.log("Data Dari Home Lempar Ke Page ini: ", this.props.location.state.productId);
    }

    //get Data From Firebase
    const user = "user";
    this.props.getNotes(user);
  }

  handleTabChange = (e) => {
    console.log(e.target.innerText.replace(' ', ''));
    console.log("INI ID QU: ", e.id);
  };

  getDetailImages = e => {
    const data = {
      category: e.id
    };
    //props redux
    this.props.showDetailProductImages(data);
    console.log("E pas klik detail ", e);
  };

  // render
  render() {
    const {
      handleTabChange,
      getDetailImages,
      props: {
        notes,
        moreImage,
      },
      state: { panes }
    } = this;

    {
      notes.map(data => {
        console.log("INI DATA: ", data.id);
        panes.push({
          menuItem: data.id
        })
      })
    }

    return (
      <div className="p-product">
        <ContactUsButton />
        <Header isActive='our-product' />
        <HeroBanner bannerTitle="Our Product" className='half' />

        <div className="categoryMenu">
          <div className='container'>
            {notes.length !== 0 ? (
              <Fragment>
                {notes.map(image => {
                  return (
                    <div className="gridContainer" key={image.id}>
                      <div>
                        <p
                          style={{
                            cursor: "pointer",
                            width: "-webkit-max-content" /* Chrome */
                          }}
                          onClick={() => {
                            getDetailImages(image);
                          }}
                        >
                          {image.id}
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
        </div>

        <div className="category-section-wrapper">
          <div className="container">
            <Tab 
              menu={{ text: true, fluid: false, vertical: false }} 
              menuPosition='left' 
              defaultActiveIndex={1}
              panes={panes} 
              onTabChange={handleTabChange}
              />
          </div>
        </div>

        <div className='image-card'>
          <div className='container'>
            <ImageCardList
              data={moreImage}
              history={this.props.history}
            />
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
