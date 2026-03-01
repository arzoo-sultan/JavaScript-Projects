import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    type: { type: String, enum: ["plant", "seed"], required: true },

    category: String,
    subcategory: String,

    price: { type: Number, required: true },
    discountPrice: Number,
    stock: { type: Number, default: 0 },

    images: [String],

    shortDescription: String,
    fullDescription: String,

    featured: { type: Boolean, default: false },

    // Plant specific
    sunlightRequirement: String,
    wateringFrequency: String,
    careLevel: String,
    plantHeight: String,
    petFriendly: Boolean,

    // Seed specific
    germinationTime: String,
    sowingSeason: String,
    harvestTime: String,
    quantityPerPack: String,

}, { timestamps: true });

export default mongoose.model("Product", productSchema);