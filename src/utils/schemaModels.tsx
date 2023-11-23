import mongoose from "mongoose";

const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    clerk: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

export const OrderModel = mongoose.models?.Order || mongoose.model("Order", OrderSchema);