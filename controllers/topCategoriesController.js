const topCategory = require('../models/topCategorie');

// Fetch top 5 clickable categories
exports.getTopCategories = async (req, res) => {
    try {
        const topCategories = await topCategory.find()
            .sort({ clickCount: -1 }) // Sort by click count in descending order
            .limit(5); // Limit the results to top 5

        res.json(topCategories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching top 5 categories', error });
    }
};

// Increment click count for a category
exports.incrementClickCount = async (req, res) => {
    try {
        const topCategory = await topCategory.findById(req.params.id);
        if (topCategory) {
            topCategory.clickCount += 1;
            await topCategory.save();
            res.json({ message: 'Click count incremented' });
        } else {
            res.status(404).json({ message: 'Top five category not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error incrementing click count', error });
    }
};
