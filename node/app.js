const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const mongoose = require('mongoose')

const handleRouter = require('./router/index') // 路由处理文件

const app = new Koa()
const router = Router()

app.use(bodyParser())
app.use(static('./public'))
app.use(router.routes())

handleRouter(router) // 处理所有的路由

mongoose.connect('mongodb://localhost:27017/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('27017端口数据库连接成功')
  app.listen(8080, () => {
    console.log("8080端口已启动")
  })
}).catch(() => {
  console.log('连接数据库失败')
})