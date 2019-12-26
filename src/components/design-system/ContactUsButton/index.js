import React from 'react'
import { Button, Icon } from 'semantic-ui-react';
import './styles.scss';

const ContactUsButton = () => (
  <Button
    circular
    size='huge'
    color="green"
    className='ds-contact-us-button'>
    <a href="http://bit.ly/2RTwvTi">
      <Icon name="whatsapp" size='large' />
      Contact Us
    </a>
  </Button>
)

export default ContactUsButton;