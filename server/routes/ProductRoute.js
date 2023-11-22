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

// 제품 검색 by productid
ProductRouter.get(
  "/:productId",
  asyncHandler(async (req, res) => {
    const productId = req.params.productid;
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

// 제품 정보 수정 by productid
ProductRouter.put(
  "/:productId",
  asyncHandler(async (req, res) => {
    const productId = req.params.productid;
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

// 제품 삭제 by productid
ProductRouter.delete(
  "/:productId",
  asyncHandler(async (req, res) => {
    const productId = req.params.productid;
    const deletedProduct = await ProductService.deleteProduct(productId);
    if (!deletedProduct) {
      return ResponseHandler.respondWithNotFound(res);
    }
    ResponseHandler.respondWithSuccess(res, deletedProduct);
  })
);

module.exports = ProductRouter;
