import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

class ImageModal extends Component {
    state = {
        isTrueOrFalse : this.props.onModalShow
    }
    

  handleClose = () => {
    this.setState({isTrueOrFalse: false})
  };

  render() {
    const { onModalShow, onCloseClick, productsId, productsDetail  } = this.props;
    console.log("detail id", productsId)
    return (
      <div className="modal">
        <Modal show={onModalShow} onHide={onCloseClick}>
          <Modal.Header closeButton>
            <Modal.Title>
                Insert More for {productsDetail.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {productsDetail.content}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onCloseClick}>
              Close
            </Button>
            <Button variant="primary" onClick={!this.state.isModalOpen}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ImageModal;
