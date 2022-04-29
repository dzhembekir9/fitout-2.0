const mongoose = require('mongoose');

const PriceSchema = mongoose.Schema({
  originalPrice: {
    type: {
      centAmount: {
        type: Number,
        required: true,
      },
      currencyCode: {
        type: String,
        required: true,
      },
      fractionDigits: {
        type: Number,
        required: true,
      },
    },
    required: true,
  },
  offers: {},
});

module.exports = PriceSchema;
