import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Img, Ppr, Form } from "./signin.styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../redux/actions/authActions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        be social_
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class SignInSide extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/posts");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <Grid container component="main" style={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
          <Img />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Ppr>
            <Avatar style={{ margin: "10px", backgroundColor: "red" }} />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Form onSubmit={this.onSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email Address"
                name="email"
                error={errors.email ? true : false}
                helperText={errors.email}
                value={this.email}
                onChange={this.onChange}
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                error={errors.password ? true : false}
                helperText={errors.password}
                value={this.password}
                onChange={this.onChange}
                type="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{
                  margin: "30px 0 20px",
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </Form>
          </Ppr>
        </Grid>
      </Grid>
    );
  }
}

SignInSide.protoTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(SignInSide);
