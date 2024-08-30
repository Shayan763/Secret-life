const categorieModel = require('../models/categorie');

exports.createCategorie = async (req, res) => {
    try {
  
      const categorie = await new categorieModel(req.body).save();
      res.status(201).json({ message: 'categorie created successfully', categorie });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to create categorie', error: err.message });
    }
  };

  // Get All categorie
exports.getAllcategorie = async (req, res) => {
    try {
      const categorie = await categorieModel.find();
      res.status(200).json(categorie);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve categorie', error: err.message });
    }
  };
  
  // Get categorie by ID
  exports.getcategorieById = async (req, res) => {
    try {
      const categorie = await categorieModel.findById(req.params.id);
      if (!categorie) return res.status(404).json({ message: 'categorie not found' });
      res.status(200).json(categorie);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve the categorie', error: err.message });
    }
  };
  
  // Update categorie
  exports.updatecategorie = async (req, res) => {
    try {
      const updatedcategorie = await categorieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedcategorie) return res.status(404).json({ message: 'categorie not found' });
      res.status(200).json({ message: 'categorie updated successfully', updatedcategorie });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to update the categorie', error: err.message });
    }
  };
  
  // Delete categorie
  exports.deletecategorie = async (req, res) => {
    try {
      const deletedcategorie = await categorieModel.findByIdAndDelete(req.params.id);
      if (!deletedcategorie) return res.status(404).json({ message: 'categorie not found' });
      res.status(200).json({ message: 'categorie deleted successfully' });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to delete the categorie', error: err.message });
    }
  };
  