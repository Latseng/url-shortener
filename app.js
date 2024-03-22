const express = require("express");
const app = express();
const port = 3000;

//產生器首頁
app.get("/", (req, res) => {
  res.send("express app for shorterURL");
});

//導向原本URL
app.get("/:short_URL", (req, res) => {
  const short_URL = `generate_short_URL`
  //先導向google以測試路由是否正常
  const URL = `http://google.com`;
  res.redirect(URL);
});

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
});
