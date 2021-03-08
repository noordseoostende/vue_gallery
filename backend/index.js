const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Dagon feest");
});

app.listen(3000);
