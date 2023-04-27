import { User } from "../model/auth.model";
const createUser = async (call, cb) => {
  const { email, name } = call.request;
  const userData = await User.findOne({ email });
  // if (userData) {
  //   return cb(new Error("user already exist"), null);
  // }
  const data = await User.create({
    email,
    name,
  });
  console.log(data);
  if (data) {
    return cb(null, { id: data.id });
  }
};
export { createUser };
