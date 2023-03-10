import mongoose from "mongoose";
import { DB_MONGO } from "./config.js";

const getConnection = () => {
  try {

    mongoose.set("strictQuery",true)
    const db = mongoose.connect(DB_MONGO);
    console.log("Conect to database");
  } catch (error) {
    console.log(error);
  }
};


export default getConnection