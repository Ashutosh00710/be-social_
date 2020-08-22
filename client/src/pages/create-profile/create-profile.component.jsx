import React from "react";
import TextField from "@material-ui/core/TextField";
import { CardContent, Grid, Button, CircularProgress } from "@material-ui/core";
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
import PropTypes from "prop-types";
import { Container, Head } from "./create-profile.styles";
import { withRouter } from "react-router-dom";
import {
  createProfile,
  getCurrentUser,
} from "../../redux/actions/profileActions";
import { connect } from "react-redux";
import SocialLinks from "./social-links.component";

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      handle: "",
      company: "",
      location: "",
      skills: "",
      bio: "",
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: "",
      errors: {},
    };
  }

  componentDidMount() {
    this.props.getCurrentUser();
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      location: this.state.location,
      skills: this.state.skills,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      instagram: this.state.instagram,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
    };

    this.props.createProfile(profileData, this.props.history);
  };

  componentWillReceiveProps(nextProp) {
    if (nextProp.errors) {
      this.setState({ errors: nextProp.errors });
    }
  }

  render() {
    const { errors } = this.state;
    const { loading, profile } = this.props.profile;

    let Content;
    if (profile === null || loading) {
      Content = (
        <CircularProgress
          style={{ marginLeft: "50%", marginTop: "4rem", marginBottom: "4rem" }}
        />
      );
    } else {
      if (Object.keys(profile).length > 0) {
        Content = (
          <>
            <Head>
              <h1>Create Your Profile</h1>
              <p>Let's get some information to make your profile stand out</p>
            </Head>
            <form onSubmit={this.onSubmit} noValidate autoComplete="off">
              <div>
                <TextField
                  name="handle"
                  label={profile.handle ? profile.handle : "Profile Handle"}
                  variant="outlined"
                  error={errors.handle ? true : false}
                  helperText={
                    errors.handle
                      ? errors.handle
                      : "A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)"
                  }
                  disabled={profile.handle ? true : false}
                  defaultValue={profile.handle}
                  value={this.state.handle}
                  onChange={this.onChange}
                  style={{ marginBottom: "1rem", width: "96.5%" }}
                />
                <TextField
                  name="company"
                  label="Company"
                  variant="outlined"
                  error={errors.company ? true : false}
                  helperText={
                    errors.company
                      ? errors.company
                      : "Could be your own company or one you work for"
                  }
                  value={this.state.company}
                  onChange={this.onChange}
                  style={{ marginBottom: "1rem", width: "96.5%" }}
                />
                <TextField
                  name="location"
                  label="Location"
                  variant="outlined"
                  error={errors.location ? true : false}
                  helperText={
                    errors.location
                      ? errors.location
                      : "City & state suggested (eg. Boston, LA)"
                  }
                  value={this.state.location}
                  onChange={this.onChange}
                  style={{ marginBottom: "1rem", width: "96.5%" }}
                />
                <TextField
                  name="skills"
                  label="Skills"
                  variant="outlined"
                  error={errors.skills ? true : false}
                  helperText={
                    errors.skills
                      ? errors.skills
                      : "Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                  }
                  value={this.state.skills}
                  onChange={this.onChange}
                  style={{ marginBottom: "1rem", width: "96.5%" }}
                />
                <TextField
                  name="bio"
                  label="Bio"
                  multiline
                  rows={3}
                  variant="outlined"
                  error={errors.bio ? true : false}
                  helperText={
                    errors.bio ? errors.bio : "Tell us a little about yourself"
                  }
                  value={this.state.bio}
                  onChange={this.onChange}
                  style={{ width: "96.5%" }}
                />
                <h3 style={{ fontFamily: '"Raleway", sans-serif' }}>
                  Other Social Media Handles (Optional)
                </h3>
                <IconButton
                  onClick={() =>
                    this.setState({ expanded: !this.state.expanded })
                  }
                  aria-expanded={this.state.expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <SocialLinks
                      component={Twitter}
                      name="twitter"
                      label="Twitter Profile URL"
                      error={errors.twitter ? true : false}
                      errors={errors.twitter}
                      value={this.state.twitter}
                      onChange={this.onChange}
                    />
                    <SocialLinks
                      component={Facebook}
                      name="facebook"
                      label="Facebook Profile URL"
                      error={errors.facebook ? true : false}
                      errors={errors.facebook}
                      value={this.state.facebook}
                      onChange={this.onChange}
                    />
                    <SocialLinks
                      component={Instagram}
                      name="instagram"
                      label="Instagram Profile URL"
                      error={errors.instagram ? true : false}
                      errors={errors.instagram}
                      value={this.state.instagram}
                      onChange={this.onChange}
                    />
                    <SocialLinks
                      component={YouTube}
                      name="youtube"
                      label="YouTube Channel URL"
                      error={errors.youtube ? true : false}
                      errors={errors.youtube}
                      value={this.state.youtube}
                      onChange={this.onChange}
                    />
                    <SocialLinks
                      component={LinkedIn}
                      name="linkedin"
                      label="LinkedIn Profile URL"
                      error={errors.linkedin ? true : false}
                      errors={errors.linkedin}
                      value={this.state.linkedin}
                      onChange={this.onChange}
                    />
                  </CardContent>
                </Collapse>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </>
        );
      }
    }

    return <Container>{Content}</Container>;
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { createProfile, getCurrentUser })(
  withRouter(CreateProfile)
);
