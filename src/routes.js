const bodyParser = require('body-parser')
const user = require('./routes/user.routes')
const product = require('./routes/product.routes')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        user,
        product
    )
}