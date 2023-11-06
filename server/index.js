const express = require('express');
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('../webpack.config');

const app = express();
const compile = webpack(config);

app.use(webpackDevMiddleware(compile, { publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compile));

app.listen(8000, (err) => {
    if (err) console.log(`Server is not running at port 8000`)
    console.log(`Server is running at port 8000`)
});