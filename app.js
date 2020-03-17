const express = require("express");
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// middleware
app.use(helmet());
app.use(morgan("combined"));
app.use(cors());
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.status(200).send("GemBuddy API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`>>>> [GEM-BUDDY SERVER] listening on port ${PORT}...`)
);
