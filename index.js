import app from "./app.js"
import { PORT } from "./config.js";
import getConnection from './bd.js';

getConnection()
app.listen(PORT,()=>{

  console.log('Listening in port ',PORT);
})