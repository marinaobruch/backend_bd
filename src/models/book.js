const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    minLength: 2,
  },
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  genre: {
    type: String,
    required: true,
    minLength: 2,
  },
  pages_amount: {
    type: Number,
    required: true,
    minLength: 1,
  },
  reliaze_date: {
    type: Number,
    required: true,
    minLength: 1,
  },
});

module.exports = mongoose.model("book", bookSchema);

// {
//   "author": "Tolstoy",
//   "title": "War&Peace",
//   "genre":"Fantazy",
//   "pages_amount": 100
// }
// {
//   "author": "Bulgakov",
//   "title": "Master%Margarita",
//   "genre":"Fantazy",
//   "pages_amount": 500
// }
// {
//   "author": "Dostoyevskiy",
//   "title": "Crime&Punishment",
//   "genre": "Fantazy",
//   "pages_amount": 900,
//   "reliaze_date": 1866,
//   "_id": "65494336fd622c555b06b842",
//   "__v": 0
// }
