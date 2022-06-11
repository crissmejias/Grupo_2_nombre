/*const { Router } = require("express");
const express = require("express");
const productsControllersDb = require("../controllers/productsControllersDb");
const router = express.Router();
// multer paso 2//
const path = require('path');
const multer = require('multer');


//const productsController = require("../controllers/productsControllers");
const authMiddleware = require("../middlewares/authMiddleware");

//multer paso 3
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/images-multer'));
    },
    filename: function (req, file, cb) {
      cb(null, 'valla-'+Date.now()+path.extname(file.originalname))
    }
  })

//multer paso 4
  const upload = multer({ storage })


router.get("/", authMiddleware,productsControllersDb.productsList);
router.get("/createProduct",authMiddleware, productsControllersDb.createProduct);
router.get("/:idProduct",authMiddleware, productsControllersDb.detalleProduct);
//multer paso 5
router.post("/createProduct",authMiddleware, upload.single('file'), productsControllersDb.recordProduct)

router.get("/:idProduct/edit",authMiddleware,productsControllersDb.editProduct);
//multer paso 5 
router.post("/:idProduct/edit",authMiddleware, upload.single('newImage'), productsControllersDb.putProduct); 

router.post("/:idProduct",authMiddleware ,productsControllersDb.deleteProduct);
    
    

module.exports = router;

*/
