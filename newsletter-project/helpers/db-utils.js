import { MongoClient } from "mongodb";
const uri = process.env.MONGO_DB_URI;

export async function connectDB() {
  const client = await MongoClient.connect(uri);
  return client;
}

export async function getAllComments(client, collection, sort, filter) {
  const db = client.db("newsletter");

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}

export async function insertDocument(client, collection, document) {
  const db = client.db("newsletter");

  const result = await db.collection(collection).insertOne(document);
  return result;
}
