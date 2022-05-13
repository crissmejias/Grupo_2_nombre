// const path=require("path");
// const { homedir } = require("os");
// const products = [
//   {
//     id: 01,
//     tipo: "Vallas de seguridad vial",
//     material: "madera",
//     nombre: "Valla De Madera Perimetral Verde 1,20 X 1.50 Seguridad Vial",
//     precio: 1764,
//     descripcion: "xxx",
//     imagen: "images/valla-01.png",
//   },
//   {
//     id: 02,
//     tipo: "Vallas de seguridad vial",
//     material: "plastico",
//     nombre: "Valla Vial 1900x1100 Mm Polipropileno P/seguridad Vialplast",
//     precio: 33619,
//     descripcion: "yyy",
//     imagen: "images/valla-02.png",
//   },
// ]; Pongo a dormir el array para usar el JSON
const path = require("path");
const fs = require("fs");
const { parse } = require("path");
const pathToProducts = path.join(__dirname, "../database/products.json");
const productsList = fs.readFileSync(pathToProducts);
const productos = JSON.parse(productsList);

const mainControllers = {
  index: (req, res) => {
    res.render("index");
  },
  productdetail: (req, res) => {
    res.render("productDetail");
  },
  quoter: (req, res) => {
    res.render("quoter");
  },
  register: (req, res) => {
    res.render("register");
  },
  login: (req, res) => {
    res.render("login");
  },
  products: (req, res) => {
    res.render("productList", { productos});
  },
  newProduct: (req, res) => {
    res.render("newProduct");
  },
};

module.exports = mainControllers;
