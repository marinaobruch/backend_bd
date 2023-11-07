const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  username: {
    type: String,
    required: true,
    minLength: 2,
  },
  email: {
    type: String,
    required: true,
    minLength: 2,
  },
  books: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "book",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);

// {
//   "name": "Marina",
//   "username": "MarinaObruch",
//   "email":"marina@mail.ru"
// }
