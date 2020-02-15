import React, { Component } from 'react';
import './styles.scss';

import { HeroBanner, Header, Footer, ContactUsButton, H2} from '../../../../components';

class DetailProduct extends Component {
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
      <div className="p-detail-product">
        <ContactUsButton/>
        <Header isActive='our-product'/>
        <HeroBanner bannerTitle="Detail Product" className='half'/>
        <div className='container detail-product-section'>
          <H2>Header Title Product</H2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        <Footer/>
      </div>
    );
  }
}


export default DetailProduct;

