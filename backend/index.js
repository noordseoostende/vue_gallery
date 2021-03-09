const express = require("express");
const app = express();

app.get("/posts", (request, response) => {
  let posts = [
    {
      caption: "Velden",
      location: "Koekelare"
    },
    {
      caption: "Het Center",
      location: "Kortrijk"
    }
  ];
  response.send(posts);
});

app.listen(process.env.PORT || 3000);
