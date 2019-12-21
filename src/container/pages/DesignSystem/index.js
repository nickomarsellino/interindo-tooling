import React, { Component } from 'react';
import './styles.scss';


import { Button } from '../../../components';

class DesignSystem extends Component {
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
      <div className="p-design-system">
        <h2>BUTTON</h2>
        <Button>Default</Button>
      </div>
    );
  }
}


export default DesignSystem;

