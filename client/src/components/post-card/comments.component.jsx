import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <>
      <Typography>Comments (2)</Typography>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Lisa Ray"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Aliquip deserunt esse aliquip veniam duis ea. Ad nisi enim
                  velit mollit in labore aliqua in enim irure ipsum nulla do.
                  Exercitation do eu eiusmod exercitation. Id labore sit dolore
                  quis culpa laborum.
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://images.pexels.com/photos/301958/pexels-photo-301958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Ava Max"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Occaecat consequat ex anim laborum consectetur est ut.
                  Proident culpa reprehenderit amet non sit ipsum pariatur
                  laboris elit. Laborum et magna qui est cupidatat duis fugiat
                  minim voluptate et qui. Anim quis reprehenderit incididunt
                  laborum cillum minim eiusmod velit labore in sint mollit. Et
                  proident laborum commodo incididunt elit officia minim in
                  officia irure consectetur occaecat fugiat sunt. Duis officia
                  culpa anim ea irure sunt commodo aute ea adipisicing deserunt
                  non.
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
}
