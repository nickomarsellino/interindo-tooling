import React, { Component } from 'react';
import './styles.scss';


import { Header, HeroBanner } from '../../../components';

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
        <Header/>
        <HeroBanner/>
      </div>
    );
  }
}


export default HomePage;

