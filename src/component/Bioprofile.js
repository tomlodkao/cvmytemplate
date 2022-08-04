import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function Bioprofile() {
  return (
    <div
      style={{
        width: "1024px",
        height: "500px",
        marginTop: "25px",
        marginLeft: "12vw",
      }}
    >
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="First Name"
            name="FirstName"
            placeholder="First Name"
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Last Name"
            name="LastName"
            placeholder="Last Name"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label="Gender"
            name="gender"
          >
            <option value=""> </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label="Status"
            name="status"
          >
            <option value=""> </option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorce">Divorce</option>
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            label="Date of birth"
            name="date"
            type="date"
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Phone number"
            name="phone"
            placeholder="XX-XXXXXXXX"
          />
        </Grid>
      </Grid>
    </div>
  );
}
