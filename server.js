const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/goals", require("./routes/goals"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
