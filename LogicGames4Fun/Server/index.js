import express from "express";
import cors from "cors";
import { connect } from "./database.js";

import auth from "./routers/auth.js";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());
connect();

app.get("/api", (_, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use("/auth", auth);
