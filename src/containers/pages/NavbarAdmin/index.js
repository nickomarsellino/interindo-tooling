import React, { Component } from "react";
import {
  Navbar,
  Button,
  Form,
  Nav,
  NavDropdown,
  FormControl
} from "react-bootstrap";
import { logOutUser } from "../../../config/redux/action";
import { connect } from "react-redux";

class NavbarAdmin extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Admin (Interindo Tooling)</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <Nav.Link>Welcome, {this.props.userEmail}</Nav.Link>
              <Button variant="outline-success" onClick={this.props.onLogOutClick}>LOG OUT</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const reduxState = state => ({
    userData: state.user,
    notes: state.notes
  });
  
  const reduxDispatch = dispatch => ({
    logout: data => dispatch(logOutUser())
  });
  
  export default connect(reduxState, reduxDispatch)(NavbarAdmin);
