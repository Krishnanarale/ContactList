// Importing express module.
const express = require('express');

// Creating a object of express to use in current module.
const app = express();

// Importing a mongoose module in current module.
const mongoose = require('./database/mongoose');

// Importing a schema in app.js
const Contact = require('./database/models/contact');

// Enabling a json parser to exchanging data.
app.use(express.json());

// Enabling CORS for sharign resourses for other domain.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS, PATCH, HEAD');
    res.header('Access-Control-Allow-Headers', 'Origin, X-requested-with, Content-Type, Accept');
    next();
});

// Routing for api's
// Get Contacts
app.get('/api/contacts', (req, res) => {
    Contact.find({})
        .then((contacts) => res.send(contacts))
        .catch((error) => console.log(error));
});
// Add Contact
app.post('/api/addContact', (req, res) => {
    (new Contact({ 'first_name': req.body.first_name, 'last_name': req.body.last_name, 'phone': req.body.phone }))
        .save()
        .then((contacts) => res.send(contacts))
        .catch((error) => console.log(error));
});
// Get Contact
app.get('/api/contact/:id', (req, res) => {
    Contact.find({ "_id": req.params.id })
        .then((contact) => res.send(contact))
        .catch((error) => console.log(error));
});
// Update Contact
app.patch('/api/updateContact/:id', (req, res) => {
    Contact.findOneAndUpdate({ "_id": req.params.id }, { $set: req.body })
        .then((contact) => res.send(contact))
        .catch((error) => console.log(error));
});
//  Delete Contact
app.delete('/api/deleteContact/:id', (req, res) => {
    Contact.findByIdAndDelete({ "_id": req.params.id })
        .then((contact) => res.send(contact))
        .catch((error) => console.log(error));
});

app.listen(3000, () => { console.log("Server running on port 3000.") });