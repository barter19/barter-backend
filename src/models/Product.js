var mongoose = require('mongoose');

var exchangeSchema = new mongoose.Schema({
    productId: String,
    chatId: String    
},{timestamps: true})

var bidSchema = new mongoose.Schema({
    productId: String,
    userHandle: String,
    bidAmnt: Number,
    chatId: String,    
},{timestamps: true})

var productSchema = new mongoose.Schema({
    name: {type: String, default: ''},
    description: {type: String, default: ''},
    saleType: {type: String, default: ''},
    createDate: {type: Date, default: Date.now()},
    exchanges: [exchangeSchema],
    bids: [bidSchema]
}, {timestamps: true,usePushEach: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});


/**
 *  middleware.
 */
productSchema.pre('save', function (next) {
    next();
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;

