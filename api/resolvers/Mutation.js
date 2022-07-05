const Product = require('../models/Product')

const Mutation = {
  createProduct: async (parent, { product: productInput }, context) => {
    const product = new Product({
      name: productInput.name,
      metaTitle: productInput.metaTitle,
      metaDescription: productInput.metaDescription,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      slug: productInput.slug,
      content: productInput.content,
      attributes: productInput.attributes,
      variants: productInput.variants,
      price: productInput.price,
    })

    try {
      await product.save()
    } catch (error) {
      console.log(err)
      return null
    }

    return product
  },
}

module.exports = Mutation
