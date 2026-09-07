import mongoose, { Schema } from "mongoose";

const QuoteSchema = new Schema(
  {
    name: String,
    company: String,
    email: String,
    phone: String,
    country: String,
    service: String,
    budget: {
      currency: {
        type: String,
        enum: ["USD", "PKR"],
        required: true,
      },
      amount: {
        type: Number,
        required: true,
        min: 100,
      },
    },
    timeline: String,
    description: String,
    status: {
      type: String,
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

export default
  mongoose.models.Quote ||
  mongoose.model("Quote", QuoteSchema);