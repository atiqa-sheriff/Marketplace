const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/products", productController.getProducts);
router.post("/products", productController.createProduct);
router.get("/products/:id", productController.getProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);
router.delete("/products", productController.deleteAllProducts);
router.get("/products/name", productController.findProductsByName);

module.exports = router;
