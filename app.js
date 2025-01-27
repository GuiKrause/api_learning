const express = require('express')
const bodyParser = require('body-parser')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes)
app.use(shopRoutes)
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)
