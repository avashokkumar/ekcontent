console.log('Index.js Initialized')
require('dotenv').config();
const express = require("express");
const app = express ();
app.use(express.json());
const PORT = process.env.PORT || 3000;
console.log('Port from env file',process.env.PORT)
app.listen(PORT, '0.0.0.0', () => {
  console.log("Server Listening on PORT:", PORT);
});

const contentRoutes = require("./content/routes/routes");
app.use("/content", contentRoutes);
