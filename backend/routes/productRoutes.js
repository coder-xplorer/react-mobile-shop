import express from "express";

import Product from "../models/productModel.js";
const router = express.Router();
//@desc 请求所有产品
//@route GET/api/products
//@accss 公开
router.get("/", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.json(products);
});

//@desc 请求单个产品
//@route GET/api/products/:id
//@accss 公开
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "查询不到产品" });
  }
});

export default router;
