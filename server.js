import express from "express";
import mongoose from "mongoose";
import apiRoute from "./services/routes/api.route.js";
import {config} from "dotenv"


config();

const app = express()
const port = 3000

app.use(express.json());
app.use("/", apiRoute);

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})*/

app.get('/users', (req, res) => {
  console.log(req);
  console.log(res);
  res.send('home2 Hello World!')
})

const initServer = async () => {

  try {
    await mongoose.connect(process.env.URL);
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
  }
  catch(err){
    console.log("something's fishy here: err "+ err);
  }
}

initServer();
