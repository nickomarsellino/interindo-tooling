import React, { Component } from "react";
import {
  Navbar,
  Button,
  Form,
  Nav,
  NavDropdown,
  FormControl
} from "react-bootstrap";
import { Menu, Segment } from "semantic-ui-react";
import { logOutUser } from "../../../../config/redux/action";
import { connect } from "react-redux";

class NavbarAdmin extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    if (name === "logout") {
      this.props.onLogOutClick();
    }
    this.setState({
      activeItem: name
    });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary style={{ fontSize: "20px" }}>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="category"
            active={activeItem === "home"}
            // onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
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
