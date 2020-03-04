import React, { Component } from "react";
import { Form, Modal, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addCategory } from '../../../../config/redux/action';

class AddCategoryModal extends Component {
  state = {
    category: ""
  };

  componentDidMount() {}

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };

  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  onCloseClick = () => {
    this.setState({
      onAddCategoryShow: false
    });
  };

  onSaveCategory = () => {
    const data = {
      category: this.state.category
    }
    this.props.handleSaveCategory(data);
  }

  render() {
    const { onAddCategoryShow, onCloseClick } = this.props;
    return (
      <Modal
        style={{ fontSize: "20px", width: '30%' }}
        open={onAddCategoryShow}
        closeOnEscape={onCloseClick}
        closeOnDimmerClick={onCloseClick}
        onClose={onCloseClick}
        size={'Mini'}
      >
        <Modal.Header style={{ fontSize: "20px"}}>Add Your Category</Modal.Header>
        <Modal.Content>
          <Form style={{ fontSize: "16px"}}>
            <Form.Group widths="equal">
              <Form.Input fluid label="Input your category" 
                onChange={(e) => {this.onInputChange(e, "category")}}
                style={{"text-transform": "capitalize"}}
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions style={{ fontSize: "14x" }}>
          <Button onClick={onCloseClick} negative style={{ fontSize: "14px"}}>
            Cancel
          </Button>
          <Button
              onClick={() => { this.onSaveCategory(); onCloseClick();}}
              style={{ fontSize: "14px"}}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Save'
            />
        </Modal.Actions>
      </Modal>
    );
  }
}

const reduxState = state => ({
  // why using ntoes? karena di reducer disimpennya di state 'notes' (?)
  //   notes: state.notes
});

const reduxDispatch = dispatch => ({
    handleSaveCategory: data => dispatch(addCategory(data))
});

export default connect(reduxState, reduxDispatch)(AddCategoryModal);
