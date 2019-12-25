import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { storage } from "../../../config/firebase";

class ImageModal extends Component {
  state = {
    isTrueOrFalse: this.props.onModalShow,
    image: [],
    createdDate: new Date().getTime()
  };

  handleClose = () => {
    this.setState({ isTrueOrFalse: false });
  };

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };

  handleImageChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      // this.setState({ image: [...this.state.image, ...e.target.image] })
    }
    console.log(this.state.image);
  };

  saveDetailProducts = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("userData after parse json ", userData);
    // Handle Multiple Image to Firebase
    // https://stackoverflow.com/questions/50785465/how-to-multiple-image-upload-with-react-js-to-firebase
    //   const detailData = {
    //     createdDate: this.state.createdDate,
    //     userId: userData.uid,
    //     productsId: this.props.productsId
    //   };
    //   console.log("Detail Data ", detailData);

  };

  render() {
    const {
      onModalShow,
      onCloseClick,
      productsId,
      productsDetail
    } = this.props;
    console.log("detail id", productsId);
    return (
      <div className="modal">
        <Modal show={onModalShow} onHide={onCloseClick}>
          <Modal.Header closeButton>
            <Modal.Title>Insert More for {productsDetail.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form style={{ left: 0 }}>
              <div class="form-group">
                <label
                  for="exampleInputPassword1"
                  style={{ fontWeight: "bold" }}
                >
                  Description
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={e => this.onInputChange(e, "title")}
                />
              </div>
              <div>
                <input type="file" onChange={this.handleImageChange} multiple />
              </div>
            </form>{" "}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onCloseClick}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                onCloseClick();
                this.saveDetailProducts();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ImageModal;
