const moment = require('moment')
let time;
module.exports = {
    testFn: (req, res) => {
        time = moment().format("YYYY_MM_DD HH:mm:ss")
        res.render('index.html', { name: "严锦", age: time })
    }
}