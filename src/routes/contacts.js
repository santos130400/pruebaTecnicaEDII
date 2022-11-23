const Contact = require('../models/Contact');

const router = require('express').Router();


//get all contacts
router.get("/", async(req, res) => {
    const contacts = await Contact.findAll()
    res.json(contacts);
});

//get single contact
router.get("/:idContacts", async (req, res) => {
    const {idContacts} = req.params;
    const theContact = await Contact.findByPk(idContacts);
    res.json(theContact);
});

//create contact
router.post("/", async (req, res) => {
    const {names, secondNames, email, cel, direction} = req.body;

    if(!names || !secondNames || !email || !cel || !direction){
        return res.status(400).json({
            error: "Uno o mas campos vacios"
        });
    }
    const theContact = await Contact.create({names, secondNames, email, cel, direction});
    res.json(theContact);
        
});

//update contact
router.put("/:idContacts", async (req, res) => {
    const {names, secondNames, email, cel, direction} = req.body;

    if(!names || !secondNames || !email || !cel || !direction){
        return res.status(400).json({
            error: "Uno o mas campos vacios"
        });
    }
    const {idContacts} = req.params;
    const theContact = await Contact.findByPk(idContacts);
    await theContact.update({names, secondNames, email, cel, direction});
        
});

//delete contact
router.delete("/:idContacts", async (req, res) => {
    const {idContacts} = req.params;
    const theContact = await Contact.findByPk(idContacts);
    theContact.destroy();
});

module.exports = router;