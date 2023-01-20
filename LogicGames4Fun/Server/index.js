// server/index.js
const register = require('./routers/register')
const login = require('./routers/login')

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use('/register', register)
app.use('/login', login)