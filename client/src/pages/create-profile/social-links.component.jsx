import React from "react";
import { Grid, TextField } from "@material-ui/core";

const SocialLinks = ({
  component: Component,
  name,
  label,
  error,
  errors,
  value,
  onChange,
}) => {
  return (
    <Grid container alignItems="flex-end" style={{ marginBottom: "1rem" }}>
      <Grid item>
        <Component />
      </Grid>
      <Grid item>
        <TextField
          name={name}
          label={label}
          error={error}
          helperText={errors}
          value={value}
          onChange={onChange}
          style={{ width: "227.5%" }}
        />
      </Grid>
    </Grid>
  );
};

export default SocialLinks;
