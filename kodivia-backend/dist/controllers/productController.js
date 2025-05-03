"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProducts = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Product_1.default.find({});
    res.json(products);
});
exports.getProducts = getProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, imageUrl } = req.body;
    const product = new Product_1.default({ name, description, price, imageUrl });
    const createdProduct = yield product.save();
    res.status(201).json(createdProduct);
});
exports.createProduct = createProduct;
