// Getting mongoose instance to model
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    'first_name': {
        type: String,
        trim: true
    },
    'last_name': {
        type: String,
        trim: true
    },
    'phone': {
        type: String,
        trim: true
    }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;