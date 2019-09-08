const koa = require('koa');

const app = new koa();

const Router = require('koa-router');

const router = new Router();


router.get('/api', ctx => {
  ctx.body = 'Hello api';
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

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);