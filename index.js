//importing

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import { bookingCollection } from "./cinemaHallDB.js";
import cors from "cors";

//app config
const app = express();
const port = 8080;

//database config
const connection_url =
  "mongodb+srv://cinemaHallAdmin:qztYfEIu39DOkuAz@cluster0.2jzrg.mongodb.net/cinemaHallDB?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("db connected");
});

// middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//api endpoints
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getUserBookingList", (req, res) => {
  bookingCollection.find({ userName: req.query.name }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/addBooking", (req, res) => {
  const booking = req.body;

  bookingCollection.create(booking, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listener
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// nodemon --experimental-modules index.js
// 416ZClIHDnyo7zSL

// qztYfEIu39DOkuAz
