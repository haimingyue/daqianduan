const Koa = require('koa');
const path = require('path');
const app = new Koa();

const router = require('./routes/routes');

const helmet = require('koa-helmet');

const statics = require('koa-static');



app.use(helmet());
app.use(statics(path.join(__dirname, '../public')));
app.use(router());

app.listen(3000);