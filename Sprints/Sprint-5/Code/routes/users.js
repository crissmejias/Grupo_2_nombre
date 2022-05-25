const express = require('express');
const router = express.Router();
// multer paso 2//
const path = require('path');
const multer = require('multer');

//A continuación el código del ejemplo para pensarlo como guia
// // Controller
const usersController = require('../controllers/usersControllers');

// // Middlewares
//multer paso 3
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/images/users'));
    },
    filename: function (req, file, cb) {
      cb(null, 'avatar-'+Date.now()+path.extname(file.originalname))
    }
  })

//multer paso 4
  const upload = multer({ storage });
// const uploadFile = require('../middlewares/multerMiddleware');
// const validations = require('../middlewares/validateRegisterMiddleware');
// const guestMiddleware = require('../middlewares/guestMiddleware');
// const authMiddleware = require('../middlewares/authMiddleware');

// // Formulario de registro
// router.get('/register', guestMiddleware, usersController.register);
router.get('/register',usersController.register);

// // Procesar el registro
// router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);
router.post('/register',upload.single("file"),usersController.recordUser);
// // Formulario de login
// router.get('/login', guestMiddleware, usersController.login);

// // Procesar el login
// router.post('/login', usersController.loginProcess);

// // Perfil de Usuario
router.get('/profile/', usersController.profile);

//Ruta Lista usuarios
router.get('/userList',usersController.userList);



// // Logout
// router.get('/logout/', usersController.logout);

module.exports = router;