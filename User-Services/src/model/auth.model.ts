import mongoose, { Model, Schema } from "mongoose";
const schema = mongoose.Schema;

interface IUser {
  name: string;
  email: {
    type: string;
    unique: boolean;
    required: string;
    trim: boolean;
  };
  avatar?: string;
  password?: {
    type: string;
    required: string;
    trim: boolean;
  };
  confirmpassword?: string;
  tc?: boolean;
}
const UserSchema: Schema = new schema<IUser>({
  email: {
    type: String,
    trim: true,
    unique: true,
  },
});

export const User = mongoose.model("User", UserSchema);
