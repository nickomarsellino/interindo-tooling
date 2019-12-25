import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { storage } from "../../../config/firebase";
import { connect } from "react-redux";
import { addProductsDetail, getDetailProductImages } from "../../../config/redux/action";

class ImageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrueOrFalse: this.props.onModalShow,
      imageUrl: [],
      createdDate: new Date().getTime(),
    };
  }

  showImageList = () => {
    const detailData = {
      createdDate: this.state.createdDate,
      productsId: this.props.productsId,
      imageUrl: this.state.imageUrl
    };
    console.log(detailData)
  }

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
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ....
      },
      error => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(imageUrl => {
            console.log(imageUrl);
            this.setState({ imageUrl });

          const detailData = {
            createdDate: this.state.createdDate,
            userId: userData.uid,
            productsId: this.props.productsId,
            imageUrl: this.state.imageUrl
          };

          this.props.saveProductsDetail(detailData);
          });
      }
    );
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
                <img
                src="https://firebasestorage.googleapis.com/v0/b/reactjs-firebase-e8649.appspot.com/o/images%2FTokyoDrift.jpg?alt=media&token=958fd006-7152-4ae1-86ca-c76f2cf25867"
                alt=""
                height="90px"
                width="24%"
                style = {{display: 'flex; display: -webkit-box', margin: '0.25%'}}
              ></img>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/reactjs-firebase-e8649.appspot.com/o/images%2FTokyoDrift.jpg?alt=media&token=958fd006-7152-4ae1-86ca-c76f2cf25867"
                alt=""
                height="90px"
                width="25%"
                style = {{display: 'flex; display: -webkit-box', margin: '0.25%'}}
              ></img>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/reactjs-firebase-e8649.appspot.com/o/images%2FTokyoDrift.jpg?alt=media&token=958fd006-7152-4ae1-86ca-c76f2cf25867"
                alt=""
                height="90px"
                width="25%"
                style = {{display: 'flex; display: -webkit-box', margin: '0.25%'}}
              ></img>
              <div class="form-group">
                <label
                  for="description"
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
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={() => {this.showImageList()}}>
              Show Image
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

const reduxState = state => ({
  detailProducts : state.detailProducts,
  moreImage: state.moreImage

})

const reduxDispatch = dispatch => ({
  saveProductsDetail: data => dispatch(addProductsDetail(data)),
  showDetailProductImages: data => dispatch(getDetailProductImages(data))
});

export default connect(reduxState, reduxDispatch)(ImageModal);
