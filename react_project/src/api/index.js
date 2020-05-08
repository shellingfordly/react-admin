import ajax from './ajax'
import jsonp from 'jsonp';
// 登录
export const reqLogin = (userInfo) => ajax('/login', userInfo, 'post')
// 请求天气数据
export const reqWeather = () => {
  const url = `http://api.map.baidu.com/telematics/v3/weather?location=%E5%85%AD%E7%9B%98%E6%B0%B4&output=json&ak=3p49MVra6urFRGOT9s8UBWr2&callback=__jp1`
  return new Promise(resoleve => {
    jsonp(url, (err, data) => {
      if (data.status === 'success') {
        resoleve(data.results[0].weather_data[0])
      } else {
        resoleve('获取天气失败')
      }
    })
  })
}
// 添加分类
export const addCategory = (categoryInfo) => ajax('/addCategory', categoryInfo, 'post')
// 获取分类数据
export const getAllCategory = () => ajax('/getAllCategory')
// 修改分类名称
export const updataCategoryName = (categoryInfo) => ajax('/updataCategoryName', categoryInfo, 'post')
// 删除商品图片
export const removeImage = (imageInfo) => ajax('/removeImage', imageInfo, 'post')
