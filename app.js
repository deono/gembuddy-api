const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const auth = require("./routes/auth");
const users = require("./routes/users");

const authMiddleware = require("./middleware/auth");

const app = express();

// connect the database
const connectDB = require("./config/db");
connectDB();

// middleware
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(helmet());
app.use(morgan("combined"));
app.use(cors());

app.use(authMiddleware.initialize);

app.use("/api/auth", auth);
app.use("/api/users", users);

// default route
app.get("/", (req, res) => res.status(200).send("GemBuddy API Running"));
app.post("/", (req, res) => {
  const username = req.body.username;
  res.json({ body: req.body });
});

//run the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`>>>> [GEM-BUDDY SERVER] listening on port ${PORT}...`)
);
