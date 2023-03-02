const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ goodbye: "friend" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("App is serving!");
});
