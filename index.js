// Get the Variables from .env
require("dotenv").config();

// Design Server
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");
const requireAuth = require("./middleware/authMiddleware");
const session = require("express-session");
const passport = require("passport");
require("./helper/passport-config");

// Call Mongo DB Connection
const mongo = require("./config/mongoose");

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.use("/public/products", express.static("public/products"));
app.use("/public/person", express.static("public/person"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Define Routes

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

app.use(requireAuth);

// app.use("/api/users", userRouter);
// app.use("/api/products", productRouter);

// Handle Server Error
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log("running on", process.env.PORT);
});

app.get("/", (req, res) => {
  res.send("Welcome to Server 🙋🙋🙋");
});
