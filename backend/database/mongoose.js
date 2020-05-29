// Required lib
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/contactList', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    .then(() => console.log('Database connected !'))
    .catch((error) => console.log(error));

module.exports = mongoose;