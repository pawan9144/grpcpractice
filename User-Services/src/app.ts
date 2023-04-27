import ConnectDB from "./Db";
import { startGrpc } from "./utils/testGrpc";

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
