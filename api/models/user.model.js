import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    usename: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: false,
    },
    country: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: false,
    },
    desc: {
      type: String,
      require: false,
    },
    isSeller: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
