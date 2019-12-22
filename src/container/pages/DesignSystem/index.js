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
        <Button color='secondary'>Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button type='link' variant='text'>Default</Button>
        <Button type='link' variant='text' color='white'>White</Button>
      </div>
    );
  }
}


export default DesignSystem;

