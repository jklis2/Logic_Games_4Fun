import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

export const EditPasswordForm = (props) => {
  return (
    <>
      <div>
        <Dialog open={props.open} onClose={props.handleClose}>
          <DialogTitle sx={{display: "flex", justifyContent: "center", fontWeight: "bold"}}>Change password</DialogTitle>
          <DialogContent>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 2, width: "25ch", display: "flex", justifyContent: "center" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Current password"
                variant="outlined"
                type="password"
              />
              <TextField
                id="outlined-basic"
                label="New password"
                variant="outlined"
                type="password"
              />
              <TextField
                id="outlined-basic"
                label="Confirm password"
                variant="outlined"
                type="password"
              />
            </Box>
          </DialogContent>
          <DialogActions sx={{display: "flex", justifyContent: "center"}}>
            <Button onClick={props.handleClose}>Cancel</Button>
            <Button onClick={props.handleClose}>Save changes</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
