import { DATABASE_URL } from "../Config";

import mongoose from "mongoose";

mongoose.set("strictQuery", true);
const ConnectDB = async () => {
  try {
    await mongoose
      .connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any)
      .then(() => {
        console.log("database connected succesfully");
      });
  } catch (e) {
    console.log(e);
    console.log("database can not connected");
  }
};
export default ConnectDB;
