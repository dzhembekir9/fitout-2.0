const mongoose = require('mongoose')

const AttributesSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  attributes: { color: String, sizes: [Number] },
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
