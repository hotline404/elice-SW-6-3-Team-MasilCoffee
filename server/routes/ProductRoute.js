const express = require("express");
const ProductRouter = express.Router();
const ProductService = require("../services/ProductService");
const asyncHandler = require("../middlewares/async-handler");
const ResponseHandler = require("../middlewares/responses");

// 모든 제품 검색
ProductRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await ProductService.getAllProducts();
    ResponseHandler.respondWithSuccess(res, products);
  })
);

// 제품 검색 by id
ProductRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await ProductService.getProductById(productId);
    if (!product) {
      return ResponseHandler.respondWithNotFound(res);
    }
    ResponseHandler.respondWithSuccess(res, product);
  })
);

// 제품 생성
ProductRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const productData = req.body;
    const newProduct = await ProductService.createProduct(productData);
    ResponseHandler.respondWithSuccess(res, newProduct);
  })
);

// 제품 정보 수정 by id
ProductRouter.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const productData = req.body;
    const updatedProduct = await ProductService.updateProduct(
      productId,
      productData
    );
    if (!updatedProduct) {
      return ResponseHandler.respondWithNotFound(res);
    }
    ResponseHandler.respondWithSuccess(res, updatedProduct);
  })
);

// 제품 삭제 by id
ProductRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const deletedProduct = await ProductService.deleteProduct(productId);
    if (!deletedProduct) {
      return ResponseHandler.respondWithNotFound(res);
    }
    ResponseHandler.respondWithSuccess(res, deletedProduct);
  })
);

module.exports = ProductRouter;
