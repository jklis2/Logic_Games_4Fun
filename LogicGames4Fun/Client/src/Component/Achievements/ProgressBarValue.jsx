import * as React from "react";
import Box from "@mui/material/Box";
import ProgressBar from "./ProgressBar";

export default function ProgressBarValue({ percent }) {
  return (
    <Box sx={{ width: "100%" }}>
      <ProgressBar value={percent > 100 ? 100 : percent} />
    </Box>
  );
}
