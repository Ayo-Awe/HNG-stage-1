const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "Awe Ayo",
    backend: true,
    age: 20,
    bio: "God is the lifter of my hands",
  });
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log("Listening for requests on port " + port);
});
