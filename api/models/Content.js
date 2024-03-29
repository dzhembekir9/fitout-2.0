const mongoose = require('mongoose')

const ContentSchema = mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  content: [
    {
      label: {
        type: String,
        required: true,
      },
      content: String,
    },
  ],
  html: String,
})

module.exports = ContentSchema
