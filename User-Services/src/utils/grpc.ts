import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { v4 as uuidv4 } from "uuid";
import { createUser } from "../Controller/userServiceConteroller";
// import { createUser } from "../Controller/auth.controller";

const PROTO_PATH = "./proto/user.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  arrays: true,
});
const userProto: any = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();
server.addService(userProto.CustomerService.service, {
  createUser: createUser,
});

export const startGrpc = () => {
  server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.log("Server at port:", port);
      console.log("Server running at http://127.0.0.1:50051");
      server.start();
    }
  );
};
