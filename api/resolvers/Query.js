const Product = require('../models/Product')

const Query = {
  hello: () => 'HELLOOOO',
  getAllProducts: async () => {
    try {
      const products = await Product.find({})
      return products
    } catch (error) {
      return null
    }
  },
  getProductByName: async (parent, { name }, context) => {
    try {
      const product = await Product.findOne({ name })
      return product
    } catch (error) {
      return null
    }
  },
}

module.exports = Query
