import express from 'express';
import cors from 'cors';
import routes from './routes/productos/rutas.js';
import routespedidos from './routes/pedidos/rutas.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(routespedidos)


export default app;