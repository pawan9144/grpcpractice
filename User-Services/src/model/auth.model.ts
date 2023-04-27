import mongoose, { Model, Schema } from "mongoose";
const schema = mongoose.Schema;

interface IUser {
  name: string;
  email: string;
}
const UserSchema: Schema = new schema<IUser>({
  name: String,
  email: String,
});

export const User = mongoose.model("User", UserSchema);
