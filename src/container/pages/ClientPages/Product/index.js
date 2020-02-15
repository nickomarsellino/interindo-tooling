import React, { Component } from 'react';
import './styles.scss';

import { HeroBanner, Header, Footer, ContactUsButton, ImageCardList} from '../../../../components';

class Product extends Component {
  // state = {
  // };
  
  componentDidMount() {
    window.scrollTo(0,0)
    if (this.props.location.state !== undefined) {
      console.log("Data Dari Home Lempar Ke Page ini: ", this.props.location.state.productId);
    }
  }

  // render
  render() {
    // const {
    //   // handleClosePage,
    //   // state: { showSteps }
    // } = this;

    return (
      <div className="p-product">
        <ContactUsButton/>
        <Header isActive='our-product'/>
        <HeroBanner bannerTitle="Our Product" className='half'/>
        <div className='image-card'>
          <div className='container'>
            <ImageCardList 
              history={this.props.history}
              // data={imageJSON}
             />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}


export default Product;

