import amqp from "amqplib";

async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    return { connection, channel };
  } catch (ex) {
    console.error(ex);
  }
}
export const Sender = async (data) => {
  const { connection, channel }: any = await connect();

  // send data to queue
  await channel.assertQueue("ORDER");
  await channel.sendToQueue("ORDER", Buffer.from(JSON.stringify({ data })));
  console.log("Sending message to number queue");
  // close the channel and connection
  await channel.close();
  await connection.close();
};
