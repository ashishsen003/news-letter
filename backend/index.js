const express = require('express')
const { connection } = require('./db')
const cors = require('cors')
const { newLetterRouter } = require('./routes/newLetter')


const app = express()
app.use(express.json())
app.use(cors())

app.use('/subscribe', newLetterRouter)

app.listen(8000, async()=>{
    try {
        await connection
        console.log('Server is runing at port 8000');
    } catch (error) {
        console.log(error);
    }
})