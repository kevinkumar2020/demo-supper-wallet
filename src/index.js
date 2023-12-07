const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();

router.get("/code-verify", (req, res) => {
  const params = req.query;
  console.log("Http Parameters :", params);
  if (params.input === "123456") {
    const response = ["verify", params];
    res.status(200).send(response);
  } else {
    const response = ["fail", params];
    res.status(400).send(response);
  }
});

app.use("/app", router);

app.listen(3005, () => {
  console.log("Example app listening on port 3005!");
});
