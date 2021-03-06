const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model
const BookSchema = new Schema({
    title: String,
    papes: Number,
});

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
