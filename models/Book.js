const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
   title: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    isbn: {
        type: String,
        unique: true,
    },

    publishedDate: {
        type: Date,
    },

    inStock: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true
});

const Book = new mongoose.model("Book", bookSchema);

module.exports = Book;


