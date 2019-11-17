const SuccessRes = require('./../modal/SuccessRes')
const ErrorRes = require('./../modal/ErrorRes')
const { login } = require('./../controller/user')

const handleUserRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  if (method === 'POST') {
    if (path === '/api/blog/login') {
      // 登录操作 
      const body = req.body
      return login(body).then(result => {
        if (result.code === 0) {
          return new SuccessRes(result)
        } else {
          return new ErrorRes(result)
        }
      })
    }
  }
}
module.exports = handleUserRouter
