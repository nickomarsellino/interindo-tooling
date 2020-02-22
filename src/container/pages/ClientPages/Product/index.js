import React, { Component } from 'react';
import './styles.scss';
import {
  getDataFromAPI,
  getDetailProductImages
} from "../../../../config/redux/action";
import { Tab } from 'semantic-ui-react';
import { connect } from "react-redux";
import { HeroBanner, Header, Footer, ContactUsButton, ImageCardList } from '../../../../components';

class Product extends Component {
  // state = {
  // };

  componentDidMount() {
    window.scrollTo(0, 0)
    if (this.props.location.state !== undefined) {
      console.log("Data Dari Home Lempar Ke Page ini: ", this.props.location.state.productId);
    }
  }

  handleTabChange = (e) => {
    console.log(e.target.innerText.replace(' ', ''));
  };

  // render
  render() {

    const panes = [
      {
        menuItem: 'gjhgfjhfj',
        render: () => 
        <Tab.Pane attached={false}>
          Tab 1
          <ImageCardList
            history={this.props.history}
            // data={imageJSON}
            />
        </Tab.Pane>,
      }
    ]

    const {
      handleTabChange,
      // state: { showSteps }
    } = this;

    return (
      <div className="p-product">
        <ContactUsButton />
        <Header isActive='our-product' />
        <HeroBanner bannerTitle="Our Product" className='half' />
        <div className='image-card'>
          <div className='container'>
            <ImageCardList
              history={this.props.history}
            />
          </div>
        </div>

        <div className="category-section-wrapper">
          <div className="container">
            <Tab 
              menu={{ text: true, fluid: false, vertical: false }} 
              menuPosition='left' 
              panes={panes} 
              onTabChange={handleTabChange}
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
