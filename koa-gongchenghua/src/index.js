const Koa = require('koa');
const path = require('path');
const app = new Koa();

const router = require('./routes/routes');

const helmet = require('koa-helmet');

const statics = require('koa-static');
import koaBody from 'koa-body';
import jsonutil from 'koa-json';
import cors from '@koa/cors';
import compose from 'koa-compose';
import compress from 'koa-compress';

const isDevMode = process.env.NODE_ENV === 'production' ? false : true;

const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet()
])

if (!isDevMode) {
  app.use(compress())
}

app.use(middleware);
app.use(router());



app.listen(3000);