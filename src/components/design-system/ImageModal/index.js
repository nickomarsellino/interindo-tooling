
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Modal, Image } from 'semantic-ui-react';

import './styles.scss';

class ImageModal extends Component {
  state = {
    closeOnEscape: true,
    closeOnDimmerClick: false,
  };

  render() {
    const {
      state: {
        closeOnEscape,
        closeOnDimmerClick
      },
      props: {
        className,
        showPopup,
        image,
        handleClosePopup
      }
    } = this;
    const classNames = classname('ds-image-modal', className);
    return (
      <div className={classNames}>
        <Modal
          open={showPopup}
          // closeOnEscape={closeOnEscape}
          // closeOnDimmerClick={closeOnDimmerClick}
          onClose={() => handleClosePopup(showPopup)}
          closeIcon
          closeOnEscape= 'true'
          closeOnDimmerClick= 'false'
          size= 'fullscreen'
        >
         <Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid />
        </Modal>
      </div>
    );
  }
}

ImageModal.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  showPopup: PropTypes.bool,
  handleClosePopup: PropTypes.bool
}

ImageModal.defaultProps = {
  className: '',
  image: '',
  showPopup: false,
  handleClosePopup: () => {},
}

export default ImageModal;
