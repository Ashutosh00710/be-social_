import React from "react";
import Logo from "../../assets/nav-logo.svg";
import {
  NavContainer,
  Img,
  OptionContainer,
  CardStyle,
  Option,
} from "./navbar.styles";
import { Link } from "react-router-dom";
import ProtoTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { clearCurrentProfile } from "../../redux/actions/profileActions";
import { Avatar } from "@material-ui/core";

class Navbar extends React.Component {
  onLogoutClick = (event) => {
    event.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <OptionContainer>
        <Option to="/posts">Posts</Option>
        <Option to="/">Members</Option>
        <Option to="/" onClick={this.onLogoutClick} style={{ display: "flex" }}>
          <Avatar
            src={user.avatar}
            alt={user.name}
            style={{ width: "25px", height: "25px", marginRight: "10px" }}
          />
          Log Out
        </Option>
      </OptionContainer>
    );

    const guestLinks = (
      <OptionContainer>
        <Option to="/posts">Posts</Option>
        <Option to="/">Members</Option>
        <Option to="/">Log In</Option>
      </OptionContainer>
    );

    return (
      <NavContainer>
        <CardStyle>
          <Link to="/">
            <Img src={Logo} alt="logo" />
          </Link>
          {isAuthenticated ? authLinks : guestLinks}
        </CardStyle>
      </NavContainer>
    );
  }
}

Navbar.protoTypes = {
  logoutUser: ProtoTypes.func.isRequired,
  auth: ProtoTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
