const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();

router.post("/code-verify", (req, res) => {
  const body = req.body;
  const response = ["hello world", body];
  res.status(200).send(response);
});

app.use("/app", router);

app.listen(3005, () => {
  console.log("Example app listening on port 3000!");
});
