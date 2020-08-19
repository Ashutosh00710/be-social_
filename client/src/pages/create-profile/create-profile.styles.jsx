import styled from "styled-components";
import { Card } from "@material-ui/core";

export const Container = styled(Card)`
  width: 60%;
  margin: auto;
  margin-top: 6rem;
  padding: 1%;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 4rem;
  }
`;

export const Head = styled.div`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;

export const ProfileForm = styled.form`
  margin-left: 1rem;
  width: 96.5%;
`;
