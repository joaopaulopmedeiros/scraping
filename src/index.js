const express = require('express');
const routes = require('./router');
const nunjucks = require('nunjucks')

const app = express();

nunjucks.configure('src/views', {
    express: app,
    noCache: true,
})

app.use(express.urlencoded());
app.use(routes);
app.use(express.static("public/images"));

app.listen(3333);
