import { MongoClient } from "mongodb";
const URI = process.env.DB_URI;

export const connectDB = async () => {
  const client = await MongoClient.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client;
};
