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

class Navbar extends React.Component {
  render() {
    return (
      <NavContainer>
        <CardStyle>
          <Link to="/">
            <Img src={Logo} alt="logo" />
          </Link>
          <OptionContainer>
            <Option to="/posts">Posts</Option>
            <Option to="/">Members</Option>
            <Option to="/">Log Out</Option>
          </OptionContainer>
        </CardStyle>
      </NavContainer>
    );
  }
}

export default Navbar;
