const packageJson = require('./package.json')
const url = "https://bu-online.beeline.ru/"

module.exports = {
    url: url + "view_doc.html?mode=boss_personal_lk_dev",
    publicPath: packageJson.homepage,
    cookieString: "SessionID=10101625988624270190"
}
