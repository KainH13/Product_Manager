const Product = require("../models/product.model");

module.exports = {
    findAllProducts: (req, res) => {
        Product.find()
            .then((allProducts) => {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err) => {
                console.log("Find All failed");
                res.json({ message: "Something went wrong", error: err });
            });
    },

    findOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then((oneProduct) => {
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err) => {
                console.log("Find One failed");
                res.json({ message: "Something went wrong", error: err });
            });
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newlyCreatedProduct) => {
                console.log(newlyCreatedProduct);
                res.json(newlyCreatedProduct);
            })
            .catch((err) => {
                console.log("Create failed");
                res.json({ message: "Something went wrong", error: err });
            });
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedProduct) => {
                console.log(updatedProduct);
                res.json(updatedProduct);
            })
            .catch((err) => {
                console.log("Update failed");
                res.json({ message: "Something went wrong", error: err });
            });
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((result) => {
                console.log(result);
                res.json(result);
            })
            .catch((err) => {
                console.log("Delete failed");
                res.json({ message: "Something went wrong", error: err });
            });
    },
};
