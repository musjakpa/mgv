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

exports.getAllProducts = async (req, res, next) => {
    let product = await Product.find({}).exec();

    res.render('index', { product });
};

exports.getOneProducts = async (req, res, next) => {
    
    let product = await Product.findOne({ 'slugs': req.params.slug }).exec();

    res.render('productdata', { product });
};