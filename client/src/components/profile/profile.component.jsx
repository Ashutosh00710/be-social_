import React from "react";
import { CardHeader, Typography } from "@material-ui/core";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Tab from "./tab";
import {
  ProfileContainer,
  ProfilePic,
  Cover,
  Header,
  Username,
  Content,
} from "./profile.styles";

const Profile = () => {
  return (
    <ProfileContainer>
      <Cover image="https://coverfiles.alphacoders.com/107/107369.jpg" />
      <Header />
      <CardHeader
        avatar={
          <ProfilePic src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYEi7-MP_fJqbD6yYkrykoIOo-65rj95h2lyI2dPQ8sDtgj9cpA" />
        }
      />
      <Username>Iron Man</Username>
      <Content>
        <BubbleChartIcon style={{ marginRight: "0.7rem", color: "#1a6fc3" }} />
        <Typography>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </Content>
      <Content>
        <LocationOnIcon style={{ marginRight: "0.7rem", color: "#1a6fc3" }} />
        <Typography>Washington</Typography>
      </Content>
      <Tab />
    </ProfileContainer>
  );
};

export default Profile;
