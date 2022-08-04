import React from "react";
import TextField from "@mui/material/TextField";

export default function Edubackground() {
  return (
    <div
      style={{
        width: "1048px",
        height: "500px",
        marginTop: "25px",
        marginLeft: "12vw",
      }}
    >
      <TextField
        id="filled-multiline-static"
        label="Multiline"
        multiline
        rows={16}
        fullWidth
        variant="filled"
      />
    </div>
  );
}
