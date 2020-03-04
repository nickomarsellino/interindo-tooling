import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import {deleteMainProduct , deleteCategory} from '../../../../config/redux/action'
import { connect } from "react-redux";

class ConfirmDeleteCategory extends Component {
  onDeleteProductClick = () => {
    const data = {
      category: this.props.category
    }
    this.props.delCategory(data)
  }

  render() {
    const {
      onConfirmModalShow,
      onCloseClick,
      category    
    } = this.props;
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
            <p>Are you sure you want to delete "{category}" ?</p>
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
  deleteOneProduct : data => dispatch(deleteMainProduct(data)),
  delCategory : data => dispatch(deleteCategory(data))
})

export default connect (reduxState, reduxDispatch)(ConfirmDeleteCategory);