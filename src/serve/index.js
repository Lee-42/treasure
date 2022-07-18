const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const mime = require("mime");
const ms = require("mediaserver");

(function () {
  const app = express();

  // 使用 body-parser 中间间
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  //设置允许跨域访问该服务.
  app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

  app.get("/audio", function (req, res) {
    let audio_path = req.query.audio_path;
    console.log("req.query: ", audio_path);
    ms.pipe(req, res, audio_path);
  });
  app.listen(6789, () => {
    console.log("localhost:6789");
  });
})();
