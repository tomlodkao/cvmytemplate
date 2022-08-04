import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function Additionlanguage() {
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
        <Grid item xs={8}>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Empty"
          style={{ width: 200 }}
        />
        </Grid>
      </Grid>
    </div>
  );
}
