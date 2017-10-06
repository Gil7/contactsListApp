const express = require('express')
const Contact = require('../models/contact')
const router = express.Router()

router.get('/contacts', (req, res, next) => {
    Contact.getContacts((err, contacts)=> {
        if(err){
            res.json({success:false, message:'Something went wrong'})
        }
        res.json(contacts)
    })
    
})
router.post('/contacts', (req, res, next) => {
    let newContact = new Contact({
        name: req.body.name,
        lastname:req.body.lastname,
        phone:req.body.phone
    })
    Contact.createContact(newContact, (err, contact) => {
        if(err){
            res.json({success:false, message: 'Something went wrong'})
        }
        res.json({success:true, message:'Contact registered', contact})
    })
})
router.get('/contacts/:id', (req, res, next) => {
    Contact.find({_id : req.params.id}, (err, contact) => {
        if(err){
            res.json({success:false, message:'something went wrong'})
        }
        res.json(contact)
    })
})
router.delete('/contacts/:id',(req, res, next) => {
    Contact.removeContact(req.params.id, (err, result) => {
        if(err){
            res.json({success:false, message:'something went wrong'})
        }
        if(result){
            res.json({success:true, result})
        }
    })
})


module.exports = router