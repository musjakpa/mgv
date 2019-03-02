const mongoose = require ('mongoose');
const URLSlugs = require ('mongoose-url-slugs');

const Schema = mongoose.Schema;

const productsSchema = new Schema ({
    title: {
        type: String,
        default: 'Tiada Recod'
    },
    slugs: {
        type: String,
    },
    description: {
        type: String,
        default: 'Tiada Record'
    },
    remark: {
        type: String,
        default: 'Tiada Record'
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    amount: {
        type: Number,
        default: 0
    },
});

productsSchema.plugin(URLSlugs('title', {field: 'slugs'}));

module.exports = mongoose.model('products', productsSchema);

