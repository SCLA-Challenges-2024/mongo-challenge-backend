import express from "express";
import db from "../database/connection.js";
import UserModel from "../schemas/UserProfile.js";

const router = express.Router();

// use db.collection("users");

// complete this one first to get rid of the browser error
router.get("/", async (req, res) => {
  let collection = await db.collection("users");
  let results = await collection.find({}).toArray();
  res.send(results);
});

router.post("/", async (req, res) => {
  try {
    let newDocument = new UserModel({
      name: req.body.name,
      description: req.body.description
    });
    let collection = await db.collection("users");
    let result = await collection.insertOne(newDocument);
    res.send(result)
  } catch (err) {
    console.error(err);
  }
});

export default router;