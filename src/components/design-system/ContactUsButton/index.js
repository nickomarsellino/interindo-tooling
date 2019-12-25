import React from 'react'
import { Button, Icon } from 'semantic-ui-react';
import './styles.scss';

const ContactUsButton = () => (
  <Button
    circular
    size='huge'
    color="green"
    className='ds-contact-us-button'>
    <Icon name="whatsapp" size='large' />
    <p>Contact Us</p>
  </Button>
)

export default ContactUsButton;