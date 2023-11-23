import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config('./.env')

// const connectionString = "mongodb+srv://Admin:Projekt123$@logicgames4fun.0r26d1s.mongodb.net/?";

export async function connect() {
  console.log("Connection to database");
  mongoose.connect(process.env.CONNECTION_STRING);
  console.log("Connected!");
}
