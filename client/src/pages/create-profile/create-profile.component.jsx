import React from "react";
import TextField from "@material-ui/core/TextField";
import { CardContent, Grid, Button } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Twitter,
  Facebook,
  YouTube,
  Instagram,
  LinkedIn,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { Container, Head } from "./create-profile.styles";

export default class FormTextFields extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    };
  }

  render() {
    return (
      <Container>
        <Head>
          <h1>Create Your Profile</h1>
          <p>Let's get some information to make your profile stand out</p>
        </Head>
        <form noValidate autoComplete="off">
          <div>
            <TextField
              required
              id="profile-handle"
              label="Profile Handle"
              helperText="A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)"
              variant="outlined"
              style={{ marginBottom: "1rem", width: "96.5%" }}
            />
            <TextField
              id="outlined-helperText"
              label="Company"
              helperText="Could be your own company or one you work for"
              variant="outlined"
              style={{ marginBottom: "1rem", width: "96.5%" }}
            />
            <TextField
              id="outlined-helperText"
              label="Location"
              helperText="City & state suggested (eg. Boston, MA)"
              variant="outlined"
              style={{ marginBottom: "1rem", width: "96.5%" }}
            />
            <TextField
              id="outlined-helperText"
              label="Skills"
              helperText="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
              variant="outlined"
              style={{ marginBottom: "1rem", width: "96.5%" }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Bio"
              multiline
              rows={3}
              helperText="Tell us a little about yourself"
              variant="outlined"
              style={{ width: "96.5%" }}
            />
            <h3 style={{ fontFamily: '"Raleway", sans-serif' }}>
              Other Social Media Handles (Optional)
            </h3>
            <IconButton
              onClick={() => this.setState({ expanded: !this.state.expanded })}
              aria-expanded={this.state.expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Grid
                  container
                  alignItems="flex-end"
                  style={{ marginBottom: "1rem" }}
                >
                  <Grid item>
                    <Twitter />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Twitter Profile URL"
                      style={{ width: "227.5%" }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="flex-end"
                  style={{ marginBottom: "1rem" }}
                >
                  <Grid item>
                    <Facebook />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Facebook Profile URL"
                      style={{ width: "227.5%" }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="flex-end"
                  style={{ marginBottom: "1rem" }}
                >
                  <Grid item>
                    <Instagram />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Instagram Profile URL"
                      style={{ width: "227.5%" }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="flex-end"
                  style={{ marginBottom: "1rem" }}
                >
                  <Grid item>
                    <YouTube />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="YouTube Channel URL"
                      style={{ width: "227.5%" }}
                    />
                  </Grid>
                </Grid>
                <Grid container alignItems="flex-end">
                  <Grid item>
                    <LinkedIn />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="LinkedIn Profile URL"
                      style={{ width: "227.5%" }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
            <Button
              variant="contained"
              size="large"
              color="primary"
              style={{ width: "100%" }}
            >
              Submit
            </Button>
          </div>
        </form>
      </Container>
    );
  }
}
