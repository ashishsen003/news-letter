const express = require('express')
const { models } = require('mongoose')
const { newsLetterModel } = require('../model/newsLetter')

const newLetterRouter = express.Router()

newLetterRouter.post('/subscribe', async()=>{
    try {
        const newSubscription = new newsLetterModel(req.body)
        res.send('New user subscribed')
        
        await newSubscription.save()
    } catch (error) {
        console.log(error);
    }
})

module.exports = {newLetterRouter}