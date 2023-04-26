import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { v4 as uuidv4 } from "uuid";
import { getData } from "../Controller/auth.controller";

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
// const customers = [
//   {
//     id: "a68b823c-7ca6-44bc-b721-fb4d5312cafc",
//     name: "John Bolton",
//     age: 23,
//     address: "Address 1",
//   },
//   {
//     id: "34415c7c-f82d-4e44-88ca-ae2a1aaa92b7",
//     name: "Mary Anne",
//     age: 45,
//     address: "Address 2",
//   },
// ];
server.addService(userProto.CustomerService.service, {
  getAll: getData,

  // get: (call, callback) => {

  //   if (customer) {
  //     callback(null, customer);
  //   } else {
  //     callback({
  //       code: grpc.status.NOT_FOUND,
  //       details: "Not found",
  //     });
  //   }
  // },

  // insert: (call, callback) => {
  //   let customer = call.request;

  //   customer.id = uuidv4();
  //   customers.push(customer);
  //   callback(null, customer);
  // },

  // update: (call: any, callback: any) => {
  //   let existingCustomer = customers.find((n) => n.id == call.request.id);

  //   if (existingCustomer) {
  //     existingCustomer.name = call.request.name;
  //     existingCustomer.age = call.request.age;
  //     existingCustomer.address = call.request.address;
  //     callback(null, existingCustomer);
  //   } else {
  //     callback({
  //       code: grpc.status.NOT_FOUND,
  //       details: "Not found",
  //     });
  //   }
  // },

  // remove: (call, callback) => {
  //   let existingCustomerIndex = customers.findIndex(
  //     (n) => n.id == call.request.id
  //   );

  //   if (existingCustomerIndex != -1) {
  //     customers.splice(existingCustomerIndex, 1);
  //     callback(null, {});
  //   } else {
  //     callback({
  //       code: grpc.status.NOT_FOUND,
  //       details: "Not found",
  //     });
  //   }
  // },
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
