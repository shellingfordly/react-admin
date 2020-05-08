const User = require('../schema/userSchema')
const Category = require('../schema/categorySchema')
const fs = require('fs')
const path = require('path')

exports.login = async cxt => {
  const userInfo = cxt.request.body
  const user = await User.findOne(userInfo)
  if (user) {
    cxt.body = {
      status: 0,
      user,
      msg: "登录成功！"
    }
  } else {
    cxt.body = {
      status: 1,
      msg: "用户或密码不正确！"
    }
  }
}
exports.addCategory = async cxt => {
  const categoryInfo = cxt.request.body
  const category = await Category.findOne(categoryInfo)
  if (category) {
    cxt.body = {
      status: 1,
      msg: "分类已存在。"
    }
  } else {
    Category.create(categoryInfo)
    cxt.body = {
      status: 0,
      msg: "添加分类成功！"
    }
  }
}
exports.getAllCategory = async cxt => {
  const categorys = await Category.find()
  cxt.body = {
    status: 0,
    categorys: categorys || []
  }
}
exports.updataCategoryName = async cxt => {
  const { _id, categoryId, categoryName } = cxt.request.body
  const category = await Category.findOne({ categoryId, categoryName })
  if (category) {
    cxt.body = {
      status: 1,
      msg: "分类已存在。"
    }
    return
  }
  Category.updateOne({
    _id
  }, {
    '$set': { categoryName }
  }, (err, data) => {
    if (err) console.log(err)
    else {
      console.log(data)
    }
  })
  cxt.body = {
    status: 0,
    msg: "修改成功！"
  }
}
exports.imagesUpload = async cxt => {
  const name = cxt.req.file.filename
  cxt.body = {
    status: 0,
    msg: '图片上传成功!',
    data: {
      name,
      url: `http://localhost:8080/uploads/${name}`
    }
  }
}
exports.removeImage = async cxt => {
  const { name } = cxt.request.body
  const filename = path.join(__dirname, '../public/uploads', name)
  fs.unlinkSync(filename) // unlinkSync(文件路径) 删除文件
  cxt.body = {
    status: 0,
    msg: '图片删除成功!'
  }
}