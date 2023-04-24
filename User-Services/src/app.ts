import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import "./utils/grpc.ts";
const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// app.use("/", routes);

app.listen(3001, () => {
  console.log("Server started on port 3001!");
});
