import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Paper, Form } from "./signup.styles";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

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

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors }); //for errors
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper>
          <Avatar />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Form onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  error={errors.name ? true : false}
                  helperText={errors.name}
                  label="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  autoComplete="fname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  error={errors.email ? true : false}
                  helperText={errors.email}
                  label="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="password"
                  error={errors.password ? true : false}
                  helperText={errors.password}
                  value={this.state.password}
                  label="Password"
                  type="password"
                  onChange={this.onChange}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="password2"
                  error={errors.password2 ? true : false}
                  helperText={errors.password2}
                  value={this.state.password2}
                  label="Confirm Password"
                  type="password"
                  onChange={this.onChange}
                  autoComplete="confirm-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{
                margin: "30px 0 20px",
              }}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Form>
        </Paper>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(SignUp));
