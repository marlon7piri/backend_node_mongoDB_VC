import Product from "./models/Products.js";

export const GetProductsRequest = async (req, res) => {
  try {
    const result = await Product.find(req.body);
    return res.json(result);
    
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const CreandoDatosRequest = async (req, res) => {
  try {
    const {  name,price,description} = req.body;
   
    
    const newproduct = await new Product({
      name,
      price,
      description,
    
    });

    await newproduct.save();
  
    return res.json(newproduct);
   
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};



export const getProductRequest = (req, res) => {
  try {
    res.send("Obteniendo un producto");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateRequest = (req, res) => {
  try {
    res.send("Producto actualizado");
    res.status(200);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
