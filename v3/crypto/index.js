const crypto = require('crypto')

// 密匙
const SECRET_KEY = 'wJHjco_h8t6'

// MD5 加密
function md5 (content) {
  const hash = crypto.createHash('md5')
  return hash.update(content).digest('hex')
}

// 加密函数
function gen (password) {
  const str = `password=${password}&key=${SECRET_KEY}`
  return md5(str)
}

module.exports = {
  gen
}
