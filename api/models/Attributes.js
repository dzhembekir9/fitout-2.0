const mongoose = require('mongoose');

const AttributesSchema = mongoose.Schema({
  attributes: [{}],
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
});

module.exports = AttributesSchema;
