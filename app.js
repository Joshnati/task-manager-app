const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.static('./public'))

app.listen(9000,() =>{
    console.log('server is runing on port 9000')
})