const mongoose = require('mongoose');

const ContentSchema = mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  label: String,
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
});

export default ContentSchema;
