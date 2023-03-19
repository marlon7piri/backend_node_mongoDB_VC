import mongoose from 'mongoose';
import { DB_URI,Mongo_URI_ATLAS } from './config.js';

const connectionDB = ()=>{

  const db = mongoose.connect(DB_URI)
  console.log("Conectando a la base de datos");
}

export default connectionDB