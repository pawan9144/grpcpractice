import bodyParser from "body-parser";
import helmet from "helmet";
import express from "express";
import cors from "cors";
import { PORT } from "./config";
import { trigger } from "./ManageRequest";
import { Receiver } from "./utils/rabbitMq";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
Receiver();
app.listen(PORT, () => {
  console.log("Server running at port %d", PORT);
});
