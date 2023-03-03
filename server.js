const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./backend/config/db");
const colors = require("colors");
const port = process.env.PORT || 3000;

app.use(express.json());

connectDb();
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.use("/api/goals", require("./routes/goals"));

app.use("/api/new", require("./routes/goals"));
app.use("/api/user", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
