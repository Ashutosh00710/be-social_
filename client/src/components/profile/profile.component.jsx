import React from "react";
import Card from "@material-ui/core/Card";
import {
  CardHeader,
  CardMedia,
  Avatar,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Tab from "./tab";

const styles = makeStyles(() => ({
  root: {
    maxWidth: 745,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2%",
    marginBottom: "2%",
    borderRadius: "1%",
    fontFamily: "'Roboto', sans-serif",
  },
  cover: {
    height: 0,
    paddingTop: "28.25%",
  },
  divider: {
    height: "5px",
    backgroundColor: "white",
  },
  avatar: {
    position: "absolute",
    top: "22%",
    marginLeft: "2rem",
    height: "8rem",
    width: "8rem",
    border: "6px solid white",
  },
  header: {
    height: "14px",
    backgroundColor: "white",
    borderRadius: "15px 15px 0px 0px",
    marginTop: "-12px",
  },
  username: {
    marginTop: "2.2rem",
    marginLeft: "1.4rem",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Profile = () => {
  const classes = styles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://coverfiles.alphacoders.com/107/107369.jpg"
      />
      <div className={classes.header} />
      <CardHeader
        avatar={
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYEi7-MP_fJqbD6yYkrykoIOo-65rj95h2lyI2dPQ8sDtgj9cpA"
            className={classes.avatar}
          />
        }
      />
      <h1 className={classes.username}>Iron Man</h1>
      <CardContent className={classes.content}>
        <BubbleChartIcon style={{ marginRight: "0.7rem", color: "#1a6fc3" }} />
        <Typography>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardContent className={classes.content}>
        <LocationOnIcon style={{ marginRight: "0.7rem", color: "#1a6fc3" }} />
        <Typography>Washington</Typography>
      </CardContent>
      <Tab />
    </Card>
  );
};

export default Profile;
