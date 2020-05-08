## node


### koa

#### koa-multer
> 处理上传文件的模块  

```jsx
// 前台
<Upload
  // action="https://xxx.xxx.xxx"
  action="xxx/xxx" // 可能会跨域,使用proxy代理
  listType="picture-card" // 图片显示样式
  fileList={fileList}
  name='image' // 图片上传后台时需要设置name属性,并且与后台对应
>
</Upload>
// 后台  image与name对应
router.post('/images/upload', upload.single('image'), imagesUpload) // 处理图片上传的路由
```


### koa-static
> 处理静态资源




## react



### 生命周期函数

#### 路由更新时更新数据

1. 获取函数返回值
```jsx
// 当在路由更新时，会执行render函数，便会执行getTitle获取新值
getTitle(){
  let title = '' // 根据路由而变化
  return title
}
render(){
  return <span>{this.getTitle()}</span>
}
```

2. 通过感应props变化更新title值

* UNSAFE_componentWillReceiveProps(newProps) 当props发生变化时触发
  * 此时this.props还是原来的值
  * 变化后的props作为参数传入函数

```jsx
// 路由更新时，触发UNSAFE_componentWillReceiveProps，执行getTitle并传入新的props，根据props更新title，setState触发render更新，获取到新的title
state = {title: ''}
getTitle(){
  let title = ''
  this.setState({title})
}
UNSAFE_componentWillReceiveProps(newProps) {
  this.getTitle(newProps)
}
render(){
  return <span>{this.state.title}</span>
}
```


## antd


### Form表单
* 提交时，数据校验成功会触发Form上的onFinish属性执行函数，并将input的数据传入onFinish函数中
* initialValues设置初始值
* 数据校验直接写在Form.Item的rules属性上
* button上的属性htmlType="submit"就会触发onFinish

```jsx
onFinish(values){}
<Form
  name="normal_login"
  initialValues={{ username: 'admin', password: '111' }}
  onFinish={this.onFinish}
>
  <Form.Item
    name="username"
    rules={[
      { min: 3, message: '用户名不能少于3位' },
      { max: 12, message: '用户名不能多于12位' },
      { required: true, message: '用户名不能为空' }
    ]}
  >
    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
  </Form.Item>
  <Form.Item>
    <Button type='primary' htmlType="submit" block >登录</Button>
  </Form.Item>
</Form>
```

### Table表格


* pagination 设置分页器
* columns 表格头部
* dataSource 表格数据

```jsx
this.columns = [ // 设置表头
  { // 一个对象表示一列的标题
    title: '第一列列标题',
    dataIndex: 'name',
    key: 'name',
  },
  { // 第二列标题
    title: '第二列列标题',
    dataIndex: 'submit',
    key: 'submit',
    width: '50%',
    render: (text, record)=>{
      // record对象包含当前行的所有数据
      // 可以根据data中对应的submit数据返回代码，让表格中不单只是文字
    }
  }
]
this.data = [
  { // 一个对象表示一行数据
    key: 1,
    name: '第一行第一列内容', // name对应第一列的{dataIndex: 'name'}
    submit: "第一行第二列内容" // subsubmit对应第二列标题的{dataIndex: 'submit'}属性
  },
  {}
]
function App(){
  return (
    <Table pagination={{ defaultPageSize: 3 }} columns={columns} dataSource={data} bordered />
  )
}
```