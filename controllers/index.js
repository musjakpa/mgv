const Product = require('../models/products')

exports.postAllProducts = (req, res, next ) => {
    const title = req.body.title;
    const description = req.body.description;
    const remark = req.body.remark;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const amount = req.body.amount;

    const newProduct = new Product ({
        title: title,
        description: description,
        remark: remark,
        quantity: quantity,
        price: price,
        amount: amount,
    });

    newProduct.save().then(data => {
        res.redirect('/');
        console.log(`Data telah di simpan dalam data base: $(data)`);
    }).catch(err => console.log(err));
};

exports.getAllProducts = (req, res, next) => {
    let product = {
        title: 'item 1',
        description: 'fsafjsafjsjkdf',
        remark: 'ufsfsdosnonsd',
        quantity: 30,
        price: 'RM 5000.00',
        amount: 'RM 15,000.00'
    }

    res.render('index', { product });
};
