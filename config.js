import {config} from 'dotenv';

config()
export const DB_MONGO = process.env.MONGODB_URI || "mongodb://localhost/test"
export const PORT = process.env.PORT || 3000 