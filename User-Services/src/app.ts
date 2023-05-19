import ConnectDB from "./Db";
// import { rabbitInstance } from "./utils/rabbitMq";
import { startGrpc } from "./utils/grpc";

function startServer() {
  ConnectDB()
    .then(() => {
      console.log("connected to db");
      startGrpc();
    })
    .catch((err) => {
      console.log(`error occurs`, err);
    });
}
startServer();
// const data = { name: "gfdgdfgdf" };
// Sender(data);
// rabbitInstance.connect();
