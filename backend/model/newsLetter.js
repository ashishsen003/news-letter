const mongoose = require('mongoose') 

const newsLetterSchema = mongoose.Schema({

    email: {
        $and: [
           { email: { $regex: /@mongodb\.com$/ } },
        ]
    },
    timestamp: { type: Date , default: Date.now() }

}, {
    versionKey: false
}
)

const newsLetterModel = mongoose.model('user-email-data', newsLetterSchema)

module.exports={newsLetterModel}