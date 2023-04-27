import bodyParser from "body-parser";
import helmet from "helmet";
import express from "express";
import cors from "cors";

import userRouter from "./Routes/user.routes";
import { client } from "./utils/user.service";
import { PORT } from "./Config";

const app = express();

// app.use(cors());
// app.use(helmet());
app.use(express.json());
// app.get("/api/signup", () => {
//   console.log("in get api");
// });
// app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", userRouter);

// app.get("/", (req, res) => {
//   console.log("get api");
//   client.getAll(
//     {
//       name: "shahsi",
//     },
//     (err, data) => {
//       console.log("error", err);
//       if (err) {
//         return res.json({
//           result: err,
//         });
//       }
//       return res.json({
//         result: data,
//       });
//     }
//   );
// });

// app.post("/save", (req, res) => {
//   const newCustomer: any = {
//     name: req.body.name,
//     age: req.body.age,
//     address: req.body.address,
//   };

//   client.insert(newCustomer, (err, data) => {
//     if (err) throw err;
//     console.log("Customer created successfully", data);
//     res.redirect("/");
//   });
// });

// app.post("/update", (req, res) => {
//   const updateCustomer = {
//     id: req.body.id,
//     name: req.body.name,
//     age: req.body.age,
//     address: req.body.address,
//   };

//   client.update(updateCustomer, (err, data) => {
//     if (err) throw err;

//     console.log("Customer updated successfully", data);
//     res.redirect("/");
//   });
// });

// app.post("/remove", (req, res) => {
//   client.remove({ id: req.body.customer_id }, (err, _) => {
//     if (err) throw err;

//     console.log("Customer removed successfully");
//     res.redirect("/");
//   });
// });

app.listen(PORT, () => {
  console.log("Server running at port %d", PORT);
});
