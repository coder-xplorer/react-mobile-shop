// const express = require("express");
// const products = require("./data/products");
// const dotenv = require("dotenv"); //设置环境变量的插件
//使用import语法 需要保证node版本在14X以上， 同时在package.json文件中设置type 为 module
//注意：文件必须加后面的.js

import express from "express";
import dotenv from "dotenv"; //设置环境变量的插件
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import colors from "colors"; //在db.js中使用 所以放到前面
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

const app = express(); // 初始化为 app

app.get("/", (req, res) => {
  res.send("服务器已经运行");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `服务器在${process.env.NODE_ENV}模式下的${process.env.PORT}端口号运行`
      .yellow.bold
  )
);
