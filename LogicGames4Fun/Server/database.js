import mongoose from "mongoose";

const connectionString = "mongodb+srv://Admin:Projekt123$@logicgames4fun.0r26d1s.mongodb.net/?";

export async function connect() {
  console.log("Connection to database");
  mongoose.connect(connectionString);
  console.log("Connected!");
}
