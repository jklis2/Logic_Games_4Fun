import express from "express";
import cors from "cors";
import { connect } from "./config/database.js";
import auth from "./routes/authRoutes.js";
import user from "./routes/userRoutes.js";
import game from "./routes/gameRoutes.js";
import achievement from './routes/achievementRoutes.js'

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
app.use("/user", user);
app.use("/game", game);
app.use('/achievement', achievement)
