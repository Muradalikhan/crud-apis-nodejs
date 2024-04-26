const express = require("express");
const mongoose = require("mongoose");
const ProductRouter = require("./routes/product.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", ProductRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Express");
});

mongoose
  .connect("mongodb+srv://admin:admin@backend-db.3inmkeb.mongodb.net/")
  .then(() => {
    console.log("db is connected");
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch(() => console.log("db is not connected"));
