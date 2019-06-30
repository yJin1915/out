const express = require('express')
const app = express()
app.use('/node_modules', express.static('./node_modules'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('html', require('express-art-template'))
app.set('view engine', 'html')
app.set('views', './views')
app.use(express.static('./views'))
const router = require('./router/index')
app.use(router)

app.listen(5002, () => {
    console.log('server running at http://127.0.0.1:5002');

})