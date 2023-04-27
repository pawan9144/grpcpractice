import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const PROTO_PATH = "./proto/test.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  arrays: true,
});
// eslint-disable-next-line prefer-destructuring
const CustomerService: any = grpc.loadPackageDefinition(packageDefinition).CustomerService;

// eslint-disable-next-line import/prefer-default-export
export const client = new CustomerService("localhost:50051", grpc.credentials.createInsecure());

// client.check({}, (err, res) => {
//   console.log(err, res);
// });
