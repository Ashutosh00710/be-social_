import React from "react";
import {
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Checkbox,
} from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import Comment from "./comments.component";
import CmntBtn from "./cpopup.component";
import { CardContainer, MediaContainer } from "./post.styles";

export default class PostCard extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    };
  }

  render() {
    return (
      <CardContainer>
        <CardHeader
          avatar={
            <Avatar>
              <AccountCircleSharpIcon />
            </Avatar>
          }
          title="Ashutosh Dwivedi"
          subheader="October 20, 2021"
        />
        <MediaContainer
          image="https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          title="Photo"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checkedH"
          />
          <span>23</span>
          <IconButton aria-label="comment">
            <CmntBtn />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            onClick={() => this.setState({ expanded: !this.state.expanded })}
            aria-expanded={this.state.expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Comment />
          </CardContent>
        </Collapse>
      </CardContainer>
    );
  }
}
