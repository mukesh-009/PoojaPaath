const express = require('express');
const router = express.Router();
const {
  getApprovedTestimonials,
  createTestimonial,
  getAllTestimonials,
  updateTestimonial,
  deleteTestimonial,
} = require('../controllers/testimonialController');

router.route('/')
  .get(getApprovedTestimonials)
  .post(createTestimonial);

router.route('/all')
  .get(getAllTestimonials);

router.route('/:id')
  .patch(updateTestimonial)
  .delete(deleteTestimonial);

module.exports = router;
