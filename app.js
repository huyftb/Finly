const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const {readdirSync} = require('fs')
const { runInThisContext } = require('vm')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route))) 


const server = async () =>{
    await db()
    app.listen(PORT, () =>{
        console.log('listening to port:', PORT)
    })
}

server()
.then(() => console.log('Server started successfully!'))
.catch((error) => console.error('Server failed to start:', error))