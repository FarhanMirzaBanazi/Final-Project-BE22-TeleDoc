const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
var cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const allRoutes = require('./routes');

mongoose 
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("tersambung ke db");
  })
  .catch((err) => console.log(err));

app.get("/", async (req, res) => {
    res.send("Hello");
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
  })

app.use(allRoutes)