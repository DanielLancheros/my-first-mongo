import { MongoClient } from "mongodb"; // gets function from library
import { mongoURI } from "./secrets.js"; // gets secret connection string

const connection = new MongoClient(mongoURI); // connecting to our database using our secret connection string

await connection.connect(); // opening connection to our cluster

const db = connection.db('Cluster0'); // connecting to the specific database

await db.collection('students').insertOne({name: 'John Therlonge', age: 26 }) // add student

const results = await db.collection('students').findOne({name: 'John Therlonge' }); // get student

console.log(results);

connection.close(); // disconnect 
