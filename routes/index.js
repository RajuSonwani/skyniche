const express = require('express');
const router = express.Router();

//Greeting Message
router.get('/', (req, res)=>{
  res.render("home")
});

module.exports = router;
