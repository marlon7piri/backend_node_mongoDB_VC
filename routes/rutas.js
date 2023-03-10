import {Router} from 'express';


const routes = Router()
import {GetProductsRequest,CreandoDatosRequest,getProductRequest, updateRequest} from '../controller.js';

routes.get("/products",GetProductsRequest)
routes.post("/products",CreandoDatosRequest)
routes.get("/products/:id",getProductRequest)
routes.put("/products/:id",updateRequest)

export default routes