const product = require("../model/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


//==========Get All Products====================
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const allProducts = await product.find();
  if (!allProducts) {
    return next(new ErrorHandler("No Product Found", 404));
  }

  res.status(200).json({
    success: true,
    allProducts,
  });
});

//==========Create a new Product.====================

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const newProduct = await product.create(req.body);
  res.status(201).json({
    success: true,
    newProduct,
  });
});

//==========Update a Product.====================

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
  const findProduct = await product.findById(req.params.id);
  if (!findProduct) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  const updatedProduct = await product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(201).json({
    success: true,
    updatedProduct,
  });
});

//==========Remove a Product.====================

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const findProduct = await product.findById(req.params.id);
  if (!findProduct) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  const deletedProduct = await findProduct.remove();
  res.status(201).json({
    success: true,
    deletedProduct,
  });
});


//Get Product Details
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const findProduct = await product.findById(req.params.id);
  if (!findProduct) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    findProduct,
  });
});
