import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function Yourskill() {
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
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="filled"
          />
        </Grid>
      </Grid>
    </div>
  );
}
