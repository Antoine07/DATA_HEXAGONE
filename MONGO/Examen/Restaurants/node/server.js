"use strict";
const express = require("express");
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

// MONGODB
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const ny = client.db("ny");
    const coll = ny.collection("restaurants");
    const res = coll.findOne({})

    return res;
  } finally {
    // await client.close();
  }
}

async function runAll() {
  try {
    await client.connect();
    const ny = client.db("ny");
    const coll = ny.collection("restaurants");
    const res = coll.find({borough : "Brooklin"}).toArray();

    return res;

  } finally {
    // await client.close();
  }
}

app.get("/", (req, res) => {
  run()
    .then((doc) => {
      res.send(doc);
    })
    .catch(() => {
      res.send("PB");
    });
});

app.get("/best", (req, res) => {
  runAll()
    .then((doc) => {
      res.send(doc);
    })
    .catch(() => {
      res.send("PB");
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
