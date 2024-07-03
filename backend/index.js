//const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const Authenticate = require("./middleware/authrenticate");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
/** 
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/

app.use("/images", express.static(__dirname + "/public/images"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ["Content-Type", "Authorization", "parameter"],
};

app.use(cors(corsOptions));

app.use("/auth", require("./router/auth"));
app.use(Authenticate);
app.use("/users", require("./router/users"));
app.use("/posts", require("./router/posts"));
app.use("/comments", require("./router/comments"));
app.use("/matches", require("./router/matchs"));
app.use("/messages", require("./router/messages"));

app.use(express.static("public"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
