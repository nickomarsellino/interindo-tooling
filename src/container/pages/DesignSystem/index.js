import React, { Component } from 'react';
import './styles.scss';


import { Button, H1, H2 , H3, H4, TextBodyCopy} from '../../../components';

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
        <h2>ATOMS</h2>
        <div>
          <h4>Heading 1 </h4>
          <H1>Heading 1 Default</H1>
          <H1 weight='light'>Heading 1 Light</H1>
          <H1 weight='reguler'>Heading 1 Reguler</H1>
          <H1 weight='black'>Heading 1 Black</H1>
          <H1 color='white'>Heading 1 Default White</H1>
          <H1 color='primary'>Heading 1 Default Primary</H1>
          <H1 color='grey50'>Heading 1 Default Grey 50</H1>
          <H1 color='grey100'>Heading 1 Default Grey 100</H1>
          <H1 color='grey125'>Heading 1 Default Grey 125</H1>
        </div>
        <div>
          <h4>Heading 2 </h4>
          <H2>Heading 2 Default</H2>
          <H2 weight='light'>Heading 2 Light</H2>
          <H2 weight='reguler'>Heading 2 Reguler</H2>
          <H2 weight='black'>Heading 2 Black</H2>
          <H2 color='white'>Heading 2 Default White</H2>
          <H2 color='primary'>Heading 2 Default Primary</H2>
          <H2 color='grey50'>Heading 2 Default Grey 50</H2>
          <H2 color='grey100'>Heading 2 Default Grey 100</H2>
          <H2 color='grey125'>Heading 2 Default Grey 125</H2>
        </div>
        <div>
          <h4>Heading 3 </h4>
          <H3>Heading 3 Default</H3>
          <H3 weight='light'>Heading 3 Light</H3>
          <H3 weight='reguler'>Heading 3 Reguler</H3>
          <H3 weight='black'>Heading 3 Black</H3>
          <H3 color='white'>Heading 3 Default White</H3>
          <H3 color='primary'>Heading 3 Default Primary</H3>
          <H3 color='grey50'>Heading 3 Default Grey 50</H3>
          <H3 color='grey100'>Heading 3 Default Grey 100</H3>
          <H3 color='grey125'>Heading 3 Default Grey 125</H3>
        </div>
        <div>
          <h4>Heading 4 </h4>
          <H4>Heading 4 Default</H4>
          <H4 weight='light'>Heading 4 Light</H4>
          <H4 weight='reguler'>Heading 4 Reguler</H4>
          <H4 weight='black'>Heading 4 Black</H4>
          <H4 color='white'>Heading 4 Default White</H4>
          <H4 color='primary'>Heading 4 Default Primary</H4>
          <H4 color='grey50'>Heading 4 Default Grey 50</H4>
          <H4 color='grey100'>Heading 4 Default Grey 100</H4>
          <H4 color='grey125'>Heading 4 Default Grey 125</H4>
        </div>
        <div>
          <h4>TextBodyCopy </h4>
          <TextBodyCopy>TextBodyCopy Default</TextBodyCopy>
          <TextBodyCopy weight='light'>TextBodyCopy Light</TextBodyCopy>
          <TextBodyCopy weight='reguler'>TextBodyCopy Reguler</TextBodyCopy>
          <TextBodyCopy weight='black'>TextBodyCopy Black</TextBodyCopy>
          <TextBodyCopy color='white'>TextBodyCopy Default White</TextBodyCopy>
          <TextBodyCopy color='primary'>TextBodyCopy Default Primary</TextBodyCopy>
          <TextBodyCopy color='grey50'>TextBodyCopy Default Grey 50</TextBodyCopy>
          <TextBodyCopy color='grey100'>TextBodyCopy Default Grey 100</TextBodyCopy>
          <TextBodyCopy color='grey125'>TextBodyCopy Default Grey 125</TextBodyCopy>
        </div>
        <div>
          <h4>BUTTON</h4>
          <Button type='link-dom' to='/example'>Default</Button>
          <Button color='secondary'>Secondary</Button>
          <Button disabled>Disabled</Button>
          <Button type='link' variant='text' to='/example'>Default</Button>
          <Button type='link' variant='text' color='white'>White</Button>
        </div>

      </div>
    );
  }
}


export default DesignSystem;

