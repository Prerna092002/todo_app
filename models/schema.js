const mongoose = require('mongoose');

const schema =new mongoose.Schema({
    title:{
        type: 'String',
        required: true
    },
    Description:{
        type: 'String',
        required: true
    }, 
    Category:{
        type: 'String',
        required: true
    }
   
});

const Schema = mongoose.model('Schema',schema);

module.exports = Schema;