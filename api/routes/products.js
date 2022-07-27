const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.get('/:productName', async (req, res) => {
  const productSlug = req.params.productName

  try {
    const product = await Product.findOne({ slug: productSlug })
    res.status(200).json(product)
  } catch (error) {
    res.status(404).send(`Cannot find product with slug ${productSlug}`)
  }
})

// router.post('/', (req, res) => {
//   const product = new Product({
//     name: req.body.name,
//     metaTitle: req.body.metaTitle,
//     metaDescription: req.body.metaDescription,
//     createdAt: Date.now(),
//     updatedAt: Date.now(),
//     slug: req.body.slug,
//     content: req.body.content,
//     attributes: req.body.attributes,
//     variants: req.body.variants,
//     price: req.body.price,
//   });

//   product
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err.message);
//     });
// });

module.exports = router
