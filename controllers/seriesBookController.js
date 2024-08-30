const SeriesBookModel = require('../models/seriesBook');

// Create Book
exports.createseriesBook = async (req, res) => {
  try {

    const book = await new SeriesBookModel(req.body).save();
    res.status(201).json({ message: 'Series Book created successfully', book });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create book', error: err.message });
  }
};

// Get All Books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await SeriesBookModel.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve books', error: err.message });
  }
};

// Get Book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await SeriesBookModel.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve the book', error: err.message });
  }
};

// Update Book
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await SeriesBookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book updated successfully', updatedBook });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update the book', error: err.message });
  }
};

// Delete Book
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await SeriesBookModel.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete the book', error: err.message });
  }
};
