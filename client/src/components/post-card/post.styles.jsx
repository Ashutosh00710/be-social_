import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

export const CardContainer = styled(Card)`
  max-width: 745px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-top: 5rem;

  @media screen and (max-width: 800px) {
    margin-top: 4.1rem;
  }
`;

export const MediaContainer = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`;
