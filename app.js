const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')
const exhdb = require('express-handlebars')

const app = express()

//Init Middleware
//app.use(logger)

// Handles Middleware
//app.engine('handlebars', ({ defaultLayout: 'main'}));
//app.set('view engine', 'handlebars');

//Homepage Route
//app.get('/', (req, res) => {
 //   res.render('index')
//})

// Body parse middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', require('./routes/api/users'))

//Set static folder
app.use(express.static(path.join(__dirname, 'templates')))

const PORT =process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))