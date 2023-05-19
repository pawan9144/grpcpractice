import mongoose, { Model, Schema } from "mongoose";
const schema = mongoose.Schema;

interface IUser {
  email: string;
  phone: string;
  role: string;
  code: number;
}
const UserSchema: Schema = new schema<IUser>({
  email: { type: String },
  phone: {
    type: String,
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },

  code: Number,
});

export const User = mongoose.model("User", UserSchema);
