// server/index.js
// import register from './routers/register.js'
// import login from './routers/login.js';

import express from "express";
import cors from "cors";
import { connect } from "./database.js";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());

connect();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// app.use('/register', register)
// app.use('/login', login)
