import axios from 'axios'

axios.interceptors.response.use(res => res.data)
export default function (url, data = {}, method = 'get') {
  let p = {}
  return new Promise(resolve => {
    if (method === 'get') {
      p = axios.get(url, {
        params: data
      })
    } else {
      p = axios.post(url, data)
    }
    p.then(res => {
      resolve(res)
    })
  })
}