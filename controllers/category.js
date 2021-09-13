const Category = require('../models/category');

exports.create = (req, res) => {
    console.log("req.body", req.body);
    const category = new Category(req.body);

    category.save((err, category) => {
        if (err) {
            return res.status(400).json({
                err
            })
        }
        res.json({
            category
        })
    })
}

exports.list = (req, res) => {
    Category.find({}).exec((err, data) => {
         if(err){
             return res.status(400).json({
                 err
             })
         } 
         res.json(data);  
    })
}

exports.remove = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Category.findOneAndRemove({ slug }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
               // error: errorHandler(err)
               err
            });
        }
        res.json({
            message: 'Category deleted successfully'
        });
    });
};

exports.read = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Category.findOne({ slug }).exec((err, category) => {
        if (err) {
            return res.status(400).json({
                err
            });
        }
        res.json(category);
    });
};

