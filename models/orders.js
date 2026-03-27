const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({

    product_id: String,
    member: {type: mongoose.Schema.Types.ObjectId, ref: "Member"},
    product_name: String,

    price: Number,
    qty: Number,
    total: Number,

    size: String,

    payment_method: String,

    order_date:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Order', OrderSchema)