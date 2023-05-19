import { actions } from "../config/actions";
import { SendEmailUser } from "../notificationcontroller/usercontroller";

export const trigger = async (val) => {
  console.log("trigger", val);
  if (val?.data.action === "register_mail") {
    SendEmailUser(val);
  }
};
