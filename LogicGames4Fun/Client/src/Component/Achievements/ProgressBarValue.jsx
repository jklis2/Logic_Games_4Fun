import * as React from "react";
import Box from "@mui/material/Box";
import ProgressBar from "./ProgressBar";

export default function ProgrssBarValue() {
  const [progress, setProgress] = React.useState(10);

  return (
    <Box sx={{ width: "100%" }}>
      <ProgressBar value={progress} />
    </Box>
  );
}