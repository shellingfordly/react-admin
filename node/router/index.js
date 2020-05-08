const multer = require('koa-multer')
const path = require('path')

const {
  login,
  addCategory,
  getAllCategory,
  updataCategoryName,
  imagesUpload,
  removeImage
} = require('../controls')

//文件上传
//配置
const storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  //修改文件名称
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname) // 文件后缀
    cb(null, Date.now() + extname);
  }
})
//加载配置
const upload = multer({ storage: storage });

module.exports = router => {
  router.post('/login', login)
  router.post('/addCategory', addCategory)
  router.get('/getAllCategory', getAllCategory)
  router.post('/updataCategoryName', updataCategoryName)
  router.post('/upload/image', upload.single('image'), imagesUpload) // 处理图片上传的路由
  router.post('/removeImage', removeImage)
}


