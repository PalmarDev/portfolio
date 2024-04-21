const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Authenticate = require("./middleware/authrenticate");

require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/images", express.static(__dirname + "/public/images"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ["Content-Type", "Authorization", "parameter"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/auth", require("./router/auth"));
app.use(Authenticate);
app.use("/users", require("./router/users"));
app.use("/posts", require("./router/posts"));
app.use("/comments", require("./router/comments"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
