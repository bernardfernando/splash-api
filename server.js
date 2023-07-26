const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8090;

app.get("/", (request, res) => {
  res.sendStatus(200).json("hello world  gggggg");
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));

//https://api.unsplash.com/search/photos/?client_id=YOUR_ACCESS_KEY
