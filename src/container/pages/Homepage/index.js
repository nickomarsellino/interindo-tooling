import React, { Component } from 'react';
import './styles.scss';


import { HeroBanner } from '../../../components';

class HomePage extends Component {
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
      <div className="p-homepage">
        <HeroBanner bannerTitle="HomePage"/>
      </div>
    );
  }
}


export default HomePage;

