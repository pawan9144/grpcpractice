import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
// eslint-disable-next-line import/no-unresolved
import { client } from "./utils/user.service";

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  client.getAll(null, (err, data) => {
    if (err) {
      return res.json({
        result: err,
      });
    }
    return res.json({
      result: data,
    });
  });
});

app.post("/save", (req, res) => {
  const newCustomer: any = {
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };

  client.insert(newCustomer, (err, data) => {
    if (err) throw err;

    console.log("Customer created successfully", data);
    res.redirect("/");
  });
});

app.post("/update", (req, res) => {
  const updateCustomer = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };

  client.update(updateCustomer, (err, data) => {
    if (err) throw err;

    console.log("Customer updated successfully", data);
    res.redirect("/");
  });
});

app.post("/remove", (req, res) => {
  client.remove({ id: req.body.customer_id }, (err, _) => {
    if (err) throw err;

    console.log("Customer removed successfully");
    res.redirect("/");
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running at port %d", PORT);
});
