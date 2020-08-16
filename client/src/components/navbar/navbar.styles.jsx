import styled from "styled-components";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const CardStyle = styled(Card)`
  padding: 14px;
`;

export const Img = styled.img`
  float: left;
  height: 50px;

  @media screen and (max-width: 800px) {
    height: 30px;
  }
`;

export const Option = styled(Link)`
  text-decoration: none;
  margin-left: 2rem;

  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
    margin-left: 1rem;
  }
`;

export const OptionContainer = styled.div`
  float: right;
  margin-top: 0.8rem;
`;
