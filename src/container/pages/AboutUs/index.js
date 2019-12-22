import React, { Component } from 'react';
import './styles.scss';


import { HeroBanner } from '../../../components';

class aboutUs extends Component {
  state = {
  };

  componentDidMount() {
  }

  // handleClosePage onClick
  handleClosePage = () => {

  };

  // render
  render() {
    const {
      // handleClosePage,
      // state: { showSteps }
    } = this;

    return (
      <div className="p-about-us">
        <HeroBanner bannerTitle="About Us"/>
      </div>
    );
  }
}


export default aboutUs;

