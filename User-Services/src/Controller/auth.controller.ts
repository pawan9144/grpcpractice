// import { User } from "../model/auth.model";
const getData = async (call, cb) => {
  //   const { email } = call.request;
  //   const userData = await User.findOne({ email });
  //   if (userData) {
  //     cb();
  //   }
  //   const data = await User.create({
  //     email,
  //   });

  //   console.log("call", call.request);
  cb(new Error("user not found"), null);
  return;
};

/*
if we get an error we can pass 
in cb function as a first parameter
*/
export { getData };
