const express = require('express');
const router = express.Router();
const {
  getAllPoojas,
  getPooja,
  createPooja,
  updatePooja,
  deletePooja,
} = require('../controllers/poojaController');

router.route('/')
  .get(getAllPoojas)
  .post(createPooja);

router.route('/:id')
  .get(getPooja)
  .put(updatePooja)
  .delete(deletePooja);

module.exports = router;
