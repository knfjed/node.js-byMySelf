const express = require("express");
const app = express();

// getメソッドでのアクセスがあったときの動作
// スラッシュにすることで、ルートディレクトリへのアクセスがあったときの動作と指定できる
// req →リクエスト、res →レスポンス
app.get("/", (req, res) => {
  res.send("Hello Node.js");
});

app.listen(3000, () => {
  console.log("My app listening on port 3000");
});
