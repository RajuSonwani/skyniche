const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {registerForm,registerClient,updateClient,deleteClient,getAllClients,getClientById, getById } = require("../controller/clients");

//multer stuff
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: storage
})


//routes

router.get('/', registerForm);
router.get('/clients', getAllClients);
router.get('/edit/:id', getClientById);
router.get('/delete/:id', deleteClient);

router.post('/add', upload.single('profile_pic'), registerClient);
router.post('/update/:id', updateClient);

module.exports = router;