const e = require('express');
const app = e();
const router = require('./router');
const http = require("node:http");

app.set("view engine", "ejs");
app.use(e.static(__dirname + "/../public/html"));
app.use(router);

http.createServer(app)
    .listen(8888);