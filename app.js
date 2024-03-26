const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

//解析表單的post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.static("public"));

//利用Node.js的file system建立json檔，儲存網址與產生的對應短網址
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
console.log(data);

//產生短網址亂碼
function generateShortUrl() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomChars = Array(5)
    .fill(null)
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join("");
  console.log(randomChars);
  return randomChars;
}

//儲存產生的短網址到json檔
function saveUrl(url, shortUrl) {
  data[url] = shortUrl;
  fs.writeFileSync("./data.json", JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
    }
  });
}

//產生器首頁
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shorten", (req, res) => {
  const url = req.body.url;

  // 檢查 URL 是否已存在
  if (data[url]) {
    return res.render("index", { data: data[url] });
  }

  // 產生短網址
  const shortUrl = generateShortUrl();

  // 將短網址資料儲存到 JSON 檔案
  saveUrl(url, shortUrl);

  // 渲染產生結果
  res.render("index", { data: data[url] });
});

app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});

//導向原本URL
app.get("/:short_URL", (req, res) => {
  const short_URL = req.params.short_URL;
  //先導向google以測試路由是否正常
  const URL = `http://google.com`;
  res.redirect(URL);
});

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
});
