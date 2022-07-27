const { v4: uuid } = require('uuid')
const Product = require('../models/Product')

const Mutation = {
  createProduct: async (parent, { product: productInput }, context) => {
    const product = new Product({
      id: uuid(),
      name: productInput.name,
      metaTitle: productInput.metaTitle,
      metaDescription: productInput.metaDescription,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      slug: productInput.slug,
      content: productInput.content,
      attributes: productInput.attributes,
      variants: { id: uuid(), ...productInput.variants },
      price: productInput.price,
    })

    try {
      await product.save()
    } catch (error) {
      console.log(error)
      return null
    }

    return product
  },
  deleteProduct: async (parent, { id }, context) => {
    try {
      await Product.findOneAndDelete({ id })
      return 'success'
    } catch (error) {
      console.log(error)
      return 'failed'
    }
  },
  editProductById: async (parent, { id, product }, context) => {
    try {
      const newProduct = await Product.findOneAndUpdate({ id }, product, {
        new: true,
      })

      return newProduct
    } catch (error) {
      console.log(error)
      return null
    }
  },
}

module.exports = Mutation
