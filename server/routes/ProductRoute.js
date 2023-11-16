const express = require('express');
const ProductRouter = express.Router();
const ProductService = require('../services/ProductService');
const asyncHandler = require('../middlewares/async-handler');

// 모든 제품 검색
ProductRouter.get('/', asyncHandler(async (req, res) => {
  const products = await ProductService.getAllProducts();
  res.json(products);
}));

// 제품 검색 by id
ProductRouter.get('/:id', asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await ProductService.getProductById(productId);
  res.json(product);
}));

// 제품 생성
ProductRouter.post('/', asyncHandler(async (req, res) => {
  const productData = req.body;
  const newProduct = await ProductService.createProduct(productData);
  res.json(newProduct);
}));

// 제품 정보 수정 by id
ProductRouter.put('/:id', asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;
  const updatedProduct = await ProductService.updateProduct(productId, productData);
  res.json(updatedProduct);
}));

// 제품 삭제 by id
ProductRouter.delete('/:id', asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const deletedProduct = await ProductService.deleteProduct(productId);
  res.json(deletedProduct);
}));

module.exports = ProductRouter;
