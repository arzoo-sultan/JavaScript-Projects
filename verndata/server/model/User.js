import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["user", "admin"], default: "user" },

    addresses: [
        {
            country: String,
            city: String,
            addressLine: String,
            postalCode: String,
        }
    ]

}, { timestamps: true });

export default mongoose.model("User", userSchema);