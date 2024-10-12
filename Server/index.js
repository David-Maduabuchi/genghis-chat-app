const express = require("express");
const cors = require("cors");
const app = express();

// middle ware that enables us send and receive json
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
