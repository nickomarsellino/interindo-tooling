import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import {deleteMainProduct } from '../../../../config/redux/action'
import { connect } from "react-redux";

class ConfirmDeleteModal extends Component {
  state = {
    productId : ""
  }

  onDeleteProductClick = () => {
    const data = {
      productId: this.props.productsId,
      category: this.props.detailDataUtama.category,
      totalImage: this.props.totalImage
    }
    console.log("Props di modal delete yes no ", data)
    this.props.deleteOneProduct(data);
  }

  render() {
    const {
      onConfirmModalShow,
      onCloseClick,
      productsId,
      detailDataUtama,
      totalImage
    } = this.props;
    // console.log("Product Detail ", productsId)
    // console.log("total image data ", totalImage)
    return (
      <Modal
          style={{fontSize: "16px"}}
          open={onConfirmModalShow}
          closeOnEscape={onCloseClick}
          closeOnDimmerClick={onCloseClick}
          onClose={onCloseClick}
          size={'small'}
        >
          <Modal.Header>Delete Your Product</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete "{detailDataUtama.title}" ?</p>
          </Modal.Content>
          <Modal.Actions style={{fontSize: "14x"}}>
            <Button onClick={onCloseClick} negative>
              No
            </Button>
            <Button
              onClick={() => { this.onDeleteProductClick(); onCloseClick();}}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
    )
  }
}

const reduxState = state => ({
  deleteProduct: state.deleteProduct
})

const reduxDispatch = dispatch => ({
  deleteOneProduct : data => dispatch(deleteMainProduct(data))
})

export default connect (reduxState, reduxDispatch)(ConfirmDeleteModal);