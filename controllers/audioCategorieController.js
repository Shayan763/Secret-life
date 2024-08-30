const AudiocategorieModel = require('../models/audioCategory');

exports.createAudioCategorie = async (req, res) => {
    try {
  
      const audiocategorie = await new AudiocategorieModel(req.body).save();
      res.status(201).json({ message: 'Audio categorie created successfully', audiocategorie });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to create audio categorie', error: err.message });
    }
  };

  // Get All categorie
exports.getAllaudiocategorie = async (req, res) => {
    try {
      const audiocategorie = await AudiocategorieModel.find();
      res.status(200).json(audiocategorie);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve categorie', error: err.message });
    }
  };
  
  // Get categorie by ID
  exports.getaudiocategorieById = async (req, res) => {
    try {
      const audiocategorie = await AudiocategorieModel.findById(req.params.id);
      if (!audiocategorie) return res.status(404).json({ message: 'categorie not found' });
      res.status(200).json(audiocategorie);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve the categorie', error: err.message });
    }
  };
  
  // Update categorie
  exports.updateaudiocategorie = async (req, res) => {
    try {
      const updatedaudiocategorie = await AudiocategorieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedaudiocategorie) return res.status(404).json({ message: 'categorie not found' });
      res.status(200).json({ message: 'categorie updated successfully', updatedaudiocategorie });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to update the categorie', error: err.message });
    }
  };
  
  // Delete categorie
  exports.deleteaudiocategorie = async (req, res) => {
    try {
      const deletedaudiocategorie = await AudiocategorieModel.findByIdAndDelete(req.params.id);
      if (!deletedaudiocategorie) return res.status(404).json({ message: 'categorie not found' });
      res.status(200).json({ message: 'categorie deleted successfully' });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to delete the categorie', error: err.message });
    }
  };
  