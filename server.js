const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// dotend configration
dotenv.config();

// rest Object
const app = express();
// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/portfolio", require("./routes/PortfolioRoutes"));

// ports
const PORT = 8080 || 8080;
// listen
app.listen(PORT, () => {
  console.log(`server started with port ${PORT}`);
});
