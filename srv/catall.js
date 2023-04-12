const cds = require("@sap/cds");
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
const { ObjectId } = require("mongodb");
dotenv.config();

const MongoUrl = process.env.HOST_URL;
const DbName = process.env.DATABASE_NAME;
const client = new MongoClient(MongoUrl);

async function _recuperarTasa(req) {
    

}