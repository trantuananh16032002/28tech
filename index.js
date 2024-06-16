const express = require('express')
const app = express()
const port = 3000

//using template engine
app.set('views', './views')
app.set('view engine', 'pug')
//static file
app.use(express.static("public"))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})