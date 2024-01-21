const express = require("express");
const { sendEmailController } = require("../controllers/PortfolioControllers");
// const { sendEmail } = require("./email");

const app = express();

// router object
const router = express.Router();

// routes
router.post("/sendEmail", sendEmailController);

module.exports = router;
