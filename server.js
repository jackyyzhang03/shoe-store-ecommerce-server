require("dotenv").config();
console.log(process.env.NODE_ENV);

const fs = require("fs");
const path = require("path");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const morgan = require("morgan");

// Routes.
const indexRouter = require("./routes/index");
const productsRouter = require("./routes/api/products");
const checkoutRouter = require("./routes/api/checkout");
const authRouter = require("./routes/api/auth");
const cartRouter = require("./routes/api/cart");

const app = express();
const port = process.env.PORT;

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
  })
);

process.env.NODE_ENV === "production"
  ? app.use(morgan("combined", { stream: accessLogStream }))
  : app.use(morgan("dev"));

// Use routes.
app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/checkout", checkoutRouter);
app.use("/auth", authRouter);
app.use("/cart", cartRouter);

// TODO: Extract error handler.
app.use((err, req, res, next) => {
  const status = err.status ? err.status : 500;
  const message = err.message ? err.message : "Internal server error";
  const data = err.data ? err.data : status;
  res.status(status).json({ message: message, data: data });
});

app.listen(port, () => console.log(`Server running on port ${port}.`));
