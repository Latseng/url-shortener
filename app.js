const express = require("express");
const app = express();
const port = 3000;

//利用Node.js的file system建立json檔，儲存網址與產生的對應短網址
const fs = require("fs");

//產生短網址
function generateShortUrl() {

  saveUrl();
}

//儲存產生的短網址到json檔
function saveUrl(data) {
  fs.writeFile("data.json", '產生的短網址', (err) => {
    if (err) {
      console.error(err);
    }
  });
}

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
