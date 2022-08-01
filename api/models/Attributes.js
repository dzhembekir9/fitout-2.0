const mongoose = require('mongoose')

const SizeSchema = mongoose.Schema({
  size: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
})

const AttributesSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  attributes: {
    colorName: String,
    sizes: [SizeSchema],
  },
  images: [
    {
      thumb: String,
      original: {
        type: String,
        required: true,
      },
    },
  ],
  custom: {},
})

module.exports = AttributesSchema
