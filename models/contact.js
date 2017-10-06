const mongoose = require('mongoose')

const ContactShema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        required:true,
    }
})

const Contact = module.exports = mongoose.model('Contact',ContactShema)

module.exports.getContacts = (callback) => {
    Contact.find(callback)
}
module.exports.createContact = (newUser, callback) => {
    newUser.save(callback)
}
module.exports.removeContact = (id, callback) => {
    Contact.remove({_id:id}, callback)
}