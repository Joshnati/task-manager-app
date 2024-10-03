const mongoose = require('mongoose');   
const express = require('express')

const tasks = require('./routes/tasks')

const app = express()

app.use(express.json())

app.use(express.static('./public'))

// import dotenv
require('dotenv').config()

// import db
const db = require("./db/connect").Mongo_URL;

// db connection
mongoose
.connect(db, {dbName:'task-manger-app'})
.then(() => console.log('connected to Mongodb'))
.catch((err) => console.error(err))

app.use("/api/v2/tasks", tasks);

app.listen(4000, () => {
    console.log('server is runing on port 4000')
})
