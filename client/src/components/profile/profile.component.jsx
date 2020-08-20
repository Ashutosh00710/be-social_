import React from "react";
import {
  CardHeader,
  Typography,
  CircularProgress,
  Button,
} from "@material-ui/core";
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
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/actions/profileActions";
import PropTypes from "prop-types";

class Profile extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { user } = this.props.auth;

    const { loading, profile } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = (
        <CircularProgress
          style={{ marginLeft: "50%", marginTop: "4rem", marginBottom: "4rem" }}
        />
      );
    } else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <>
            <Cover image="https://coverfiles.alphacoders.com/107/107369.jpg" />
            <Header />
            <CardHeader avatar={<ProfilePic src={user.avatar} />} />
            <Username>{user.name}</Username>
            <Content>
              <BubbleChartIcon
                style={{ marginRight: "0.7rem", color: "#1a6fc3" }}
              />
              <Typography>{profile.bio}</Typography>
            </Content>
            <Content>
              <LocationOnIcon
                style={{ marginRight: "0.7rem", color: "#1a6fc3" }}
              />
              <Typography>{profile.location}</Typography>
            </Content>
            <Tab />
          </>
        );
      } else {
        dashboardContent = (
          <div style={{ margin: "3rem" }}>
            <Typography style={{ marginBottom: "1rem" }}>
              Welcome {user.name}
            </Typography>
            <Typography style={{ marginBottom: "1rem" }}>
              You haven't set your profile yet
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => (window.location.href = "/create-profile")}
            >
              Create Your Profile
            </Button>
          </div>
        );
      }
    }

    return <ProfileContainer>{dashboardContent}</ProfileContainer>;
  }
}

Profile.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentUser })(Profile);
