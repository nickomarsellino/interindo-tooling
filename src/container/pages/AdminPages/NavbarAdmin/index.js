import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { logOutUser } from "../../../../config/redux/action";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class NavbarAdmin extends Component {

  handleItemClick = (e, { name }) => {
    if (name === "logout") {
      this.props.onLogOutClick();
    }
  };

  render() {
    const {
      handleItemClick,
      props: {
        activeItem
      }
    } = this;
    return (
      <div>
        <Menu pointing secondary style={{ fontSize: "20px" }}>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
          >
            <Link to='/auth/admin/dashboard'>Home</Link>
          </Menu.Item>
          <Menu.Item
            name="category"
            active={activeItem === "category"}
          >
             <Link to='/auth/admin/category'>Category</Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

NavbarAdmin.propTypes = {
  activeItem: PropTypes.string
}

NavbarAdmin.defaultProps = {
  activeItem: 'home'
}

const reduxState = state => ({
  userData: state.user,
  notes: state.notes
});

const reduxDispatch = dispatch => ({
  logout: data => dispatch(logOutUser())
});

export default connect(reduxState, reduxDispatch)(NavbarAdmin);
