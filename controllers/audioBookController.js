const createaudioBookModel = require('../models/audioBook');

// Create Book
exports.createaudioBook = async (req, res) => {
  try {

    const audioBook = await new createaudioBookModel(req.body).save();
    res.status(201).json({ message: 'Audio Book created successfully', audioBook });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create book', error: err.message });
  }
};

// Get All Books
exports.getAllaudioBook = async (req, res) => {
  try {
    const audioBook = await createaudioBookModel.find();
    res.status(200).json(audioBook);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve books', error: err.message });
  }
};

// Get Book by ID
exports.getaudioBookById = async (req, res) => {
  try {
    const audioBook = await createaudioBookModel.findById(req.params.id);
    if (!audioBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(audioBook);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve the book', error: err.message });
  }
};

// Update Book
exports.updateBook = async (req, res) => {
  try {
    const updatedaudioBook = await createaudioBookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedaudioBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book updated successfully', updatedaudioBook });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update the book', error: err.message });
  }
};

// Delete Book
exports.deleteaudioBook = async (req, res) => {
  try {
    const deletedaudioBook = await createaudioBookModel.findByIdAndDelete(req.params.id);
    if (!deletedaudioBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete the book', error: err.message });
  }
};