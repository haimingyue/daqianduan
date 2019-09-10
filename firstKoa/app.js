const koa = require('koa');

const app = new koa();

const Router = require('koa-router');

const router = new Router();
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const json = require('koa-json');

router.prefix('/v1');


router.get('/api', ctx => {
  const params = ctx.request.query;

  console.log(params.name, params.age);
  ctx.body = {
    name: params.name,
    age: params.age
  };
})

router.get('/', ctx => {
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = 'Hello Koa';
})

router.get('/async', async ctx => {
  let result = await new Promise(resolve => {
    setTimeout(()=> {
      resolve('hello async')
    }, 1000)
  })
  ctx.body = result;
})

// app.use(async ctx => {
//   console.log(ctx);
//   console.log(ctx.request);
//   ctx.body = 'Hello Koa';
// })

router.post('/', async ctx => {
  let { body } = ctx.request;
  ctx.body = {
    body
  }
})

app.use(koaBody());
app.use(cors());
app.use(json({pretty: false, param: 'pretty'}))

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);