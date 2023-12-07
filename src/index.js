const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();

router.get("/code-verify", (req, res) => {
  const params = req.query;
  console.log("Http Parameters :", params);
  const response = ["hello world", params];
  res.status(200).send(response);
});

app.use("/app", router);

app.listen(3005, () => {
  console.log("Example app listening on port 3005!");
});
