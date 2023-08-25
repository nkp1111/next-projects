import { MongoClient } from 'mongodb'

// variables defined in env file
const mongoUrl: string = process.env.MONGO_URL as string;

export async function connectMongo() {
  try {
    console.log("Trying to connect mongoDB", mongoUrl);
    const client = await MongoClient.connect(mongoUrl)
    client.on('serverOpening', () => {
      console.log('MongoDB server is opening');
    });

    client.on('serverClosed', () => {
      console.log('MongoDB server is closed');
    });

    client.on('serverDescriptionChanged', (event) => {
      console.log('MongoDB server description changed:', event);
    });

    client.on('serverHeartbeatStarted', () => {
      console.log('MongoDB server heartbeat started');
    });

    client.on('serverHeartbeatSucceeded', () => {
      console.log('MongoDB server heartbeat succeeded');
    });

    client.on('serverHeartbeatFailed', (event) => {
      console.log('MongoDB server heartbeat failed:', event);
    });

    await client.connect();
    return { success: "Mongo DB Connected", client }
  } catch (error) {
    return { error }
  }
}

export async function disconnectMongo(client: MongoClient) {
  try {
    // Close the connection when done
    await client.close();
    return { success: "MongoDB disconnected" }
  } catch (error) {
    console.log("Error while closing mongo connection")
    return { error: JSON.stringify(error) };
  }
}
