import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    orderItems: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            name: String,
            price: Number,
            image: String,
            quantity: Number
        }
    ],

    shippingAddress: {
        country: String,
        city: String,
        addressLine: String,
        postalCode: String
    },

    paymentMethod: String,
    paymentStatus: { type: String, default: "unpaid" },
    orderStatus: { type: String, default: "pending" },

    itemsPrice: Number,
    shippingPrice: Number,
    totalPrice: Number,

}, { timestamps: true });

export default mongoose.model("Order", orderSchema);