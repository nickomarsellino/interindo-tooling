import React, { Component, Fragment } from "react";
import NavbarAdmin from "../NavbarAdmin";
import ConfirmDeleteCategory from "../ConfirmDeleteCategory";
import AddCategoryModal from "../AddCategoryModal";
import { Icon, Table, Button } from "semantic-ui-react";
import { getDataFromAPI } from "../../../../config/redux/action";
import { connect } from "react-redux";

class Category extends Component {
  state = {
    onConfirmModalShow: false,
    onAddCategoryShow: false,
    category: ""
  };

  componentDidMount() {
    this.props.getCategory();
  }

  onCloseClick = () => {
    this.setState({      
      onConfirmModalShow: false,
      onAddCategoryShow : false
    });
  };

  deleteCategory = e => {
    console.log(e);
    const data = {
      category: e.id
    };
    this.setState({
      onConfirmModalShow: "true",
      category: e.id
    });
  };

  addCategory = () => {
    console.log("Open Add Category Modal ");
    this.setState({
      onAddCategoryShow: 'true'
    })
  };

  render() {
    const { notes } = this.props;
    return (
      <div class="container">
        <NavbarAdmin />
        <ConfirmDeleteCategory
          onConfirmModalShow={this.state.onConfirmModalShow}
          onCloseClick={() => this.onCloseClick()}
          category={this.state.category}
        />
        <AddCategoryModal 
          onAddCategoryShow = {this.state.onAddCategoryShow}
          onCloseClick={() => this.onCloseClick()}
        />
        <br />
        <center>
          <Table unstackable style={{ width: "20%" }}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Category List</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {notes.length !== 0 ? (
                <div>
                  {notes.map(bebas => {
                    return (
                      <div>
                        <tr style={{ width: "100%" }}>
                          <td style={{ width: "95%" }}>{bebas.id}</td>
                          <td>
                            <Icon
                              name="trash alternate outline"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                this.deleteCategory(bebas);
                              }}
                            ></Icon>
                          </td>
                        </tr>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p>Loading..</p>
              )}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Button
                    floated="right"
                    primary
                    style={{ fontSize: "16px" }}
                    onClick = { () => {
                      this.addCategory();
                    }}
                  >
                    Add Category
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </center>
      </div>
    );
  }
}

const reduxState = state => ({
  // why using ntoes? karena di reducer disimpennya di state 'notes' (?)
  notes: state.notes
});

const reduxDispatch = dispatch => ({
  getCategory: data => dispatch(getDataFromAPI(data))
});

export default connect(reduxState, reduxDispatch)(Category);
