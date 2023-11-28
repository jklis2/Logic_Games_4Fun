import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config("./.env");

export async function connect() {
  mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => console.log('Connected!'))
    .catch((err) => console.log(err));
}
