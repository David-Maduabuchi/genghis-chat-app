const express = require("express");
require("dotenv").config(); //this enables us to read the .env file throughout our server application
const cors = require("cors");
const app = express();
const userRoute = require('./Routes/userRoute')
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("successfully connected to mongdb"))
  .catch((err) => console.log("Error", err.message));

// middle ware that enables us send and receive json
app.use(express.json());
app.use(cors());
app.use('/api/users', userRoute)

app.get("/", (req, res) => {
  res.send("Welcome to our Chat App Api");
});

app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
