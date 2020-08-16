import styled from "styled-components";
import { Card, CardMedia, CardContent } from "@material-ui/core";

export const ProfileContainer = styled(Card)`
  max-width: 845px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  margin-bottom: 2%;
  border-radius: 1%;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 800px) {
    margin-top: 4rem;
  }
`;

export const ProfilePic = styled.img`
  position: absolute;
  top: 35%;
  margin-left: 2rem;
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  border: 6px solid white;

  @media screen and (max-width: 800px) {
    top: 26%;
    margin-left: 0.8rem;
    height: 5.5rem;
    width: 5.5rem;
    border: 4px solid white;
  }
`;

export const Cover = styled(CardMedia)`
  height: 0;
  padding-top: 28.25%;

  @media screen and (max-width: 800px) {
    padding-top: 48.25%;
  }
`;

export const Header = styled.div`
  height: 14px;
  background-color: white;
  border-radius: 15px 15px 0px 0px;
  margin-top: -12px;
`;

export const Username = styled.h1`
  margin-top: 2.2rem;
  margin-left: 1.4rem;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Content = styled(CardContent)`
  display: flex;
  flex-direction: row;
`;
