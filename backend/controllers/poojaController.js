const Pooja = require('../models/Pooja');

// @desc    Get all poojas
// @route   GET /api/poojas
// @access  Public
exports.getAllPoojas = async (req, res) => {
  try {
    const poojas = await Pooja.find({ isActive: true }).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: poojas.length,
      data: poojas,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get single pooja
// @route   GET /api/poojas/:id
// @access  Public
exports.getPooja = async (req, res) => {
  try {
    const pooja = await Pooja.findOne({ id: req.params.id });

    if (!pooja) {
      return res.status(404).json({
        success: false,
        message: 'Pooja not found',
      });
    }

    res.status(200).json({
      success: true,
      data: pooja,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create new pooja
// @route   POST /api/poojas
// @access  Private (Admin)
exports.createPooja = async (req, res) => {
  try {
    const pooja = await Pooja.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Pooja created successfully',
      data: pooja,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update pooja
// @route   PUT /api/poojas/:id
// @access  Private (Admin)
exports.updatePooja = async (req, res) => {
  try {
    const pooja = await Pooja.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!pooja) {
      return res.status(404).json({
        success: false,
        message: 'Pooja not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Pooja updated successfully',
      data: pooja,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete pooja
// @route   DELETE /api/poojas/:id
// @access  Private (Admin)
exports.deletePooja = async (req, res) => {
  try {
    const pooja = await Pooja.findOneAndDelete({ id: req.params.id });

    if (!pooja) {
      return res.status(404).json({
        success: false,
        message: 'Pooja not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Pooja deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
