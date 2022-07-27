const Product = require('../models/Product')

const Query = {
  getAllProducts: async () => {
    try {
      const products = await Product.find()
      return products
    } catch (error) {
      return null
    }
  },
  getProductBySlug: async (parent, { slug }, context) => {
    try {
      const product = await Product.findOne({ slug })
      return product
    } catch (error) {
      return null
    }
  },
  getAllVariants: async (parent, { productId }, context) => {
    try {
      const product = await Product.findOne({ id: productId })
      return product.variants
    } catch (error) {
      return null
    }
  },
}

module.exports = Query
