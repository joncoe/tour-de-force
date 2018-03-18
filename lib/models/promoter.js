const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promoterSchema = new Schema({
    promoterName: {
        type: String,
        required: true
    },
    promoterEmail: {
        type: String,
        required: true
    }
});

const Promoter = mongoose.model('Promoter', promoterSchema);

module.exports = Promoter;