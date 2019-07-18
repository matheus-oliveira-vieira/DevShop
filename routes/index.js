const init = db => {
    const home = require('../controllers/home')
    const auth = require('../controllers/auth')
    const admin = require('./admin')
    const products = require('./products')
    const categories = require('./categories')
    const router = require('express').Router()
    //auth
    router.get('/', home.getIndex)
    router.post('/login', auth.login(db))
    router.get('/logout', auth.logout)
    //routes
    router.use('/admin', admin(db))
    router.use('/categoria', categories(db))
    router.use('/product', products(db))
    return router
}

module.exports = init