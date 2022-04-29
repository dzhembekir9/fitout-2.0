const mongoose = require('mongoose');

const ContentSchema = require('./Content');
const PriceSchema = require('./Price');
const AttributesSchema = require('./Attributes');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  metaTitle: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    required: true,
  },
  content: {
    type: [ContentSchema],
    required: true,
  },
  attributes: [String],
  variants: {
    type: [AttributesSchema],
    required: true,
  },
  price: PriceSchema,
});

module.exports = mongoose.model('Product', ProductSchema);
