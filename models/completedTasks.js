const mongoose = require('mongoose');

const completeTaskSchema = new mongoose.Schema({
    ComTitle:{
        type:String,
        required:true
    },
    ComDescription:{
        type: 'String',
        required: true
    }, 
    ComCategory:{
        type: 'String',
        required: true
    },
});
const CompleteTask = mongoose.model('CompleteTask', completeTaskSchema);
module.exports = CompleteTask;

