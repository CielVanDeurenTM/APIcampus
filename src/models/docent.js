const mongoose = require('mongoose');
const campus = require('./campus');

const DocentSchema = new mongoose.Schema({
    voornaam: {type: String},
    acheternaam: {type: String},
    campussen: {type: mongoose.Schema.Types.ObjectId, ref: campus}
  }, {
    collection: 'campus'  
});

module.exports = mongoose.model('Docent', DocentSchema);