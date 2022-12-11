const Schema = require('../models/schema');
const CompleteTask=require('../models/completedTasks');
module.exports.home = async function (req, res) {
    try {
        let allTasks = await Schema.find({});
        return res.render('home', {
            task_list: allTasks,
        })
    } catch (err) {
        if (err) {
            console.log("error in finding the tasks");
            return;
        }
    }
}



module.exports.task = async function (req, res) {
    try {
        await Schema.create(req.body);
        return res.redirect('back');
    } catch (err) {
        if (err) {
            console.log("error in creating a task", err);
            return;
        }
    }
}

module.exports.delete = function (req, res){
    let id = req.params.id;
    Schema.findByIdAndDelete(id, function (err){
        if(err){
            console.log("error in deleting the task",err);
            return res.redirect('/');
        }
        return res.redirect('/');
    })
}
module.exports.update=async function(req,res){
    try{
        let id=req.params.id;
       await Schema.findByIdAndUpdate(id,req.body)
       return res.redirect('/');
       }
    catch(err){
     if(err){
        console.log("error in updating the task",err);
        return res.redirect('/');
     }
    }
   
}
module.exports.profile = async function (req, res) {
    try {
        let i = await Schema.findById(req.params.id);
        return res.render('profile', {
            task: i,
        })
    } catch (err) {
        if (err) {
            console.log("error in finding the tasks");
            return;
        }
    }
}

module.exports.complete = async function (req, res) {
    let id = req.params.id;
    let tasks = await Schema.findById(id);
    await CompleteTask.create({
        ComTitle:tasks.title,
        ComDescription: tasks.Description,
        ComCategory: tasks.Category,
    })
    await Schema.findByIdAndDelete(id);
    return res.redirect('/');
}

module.exports.completed = async function (req, res) {
    let Ctasks = await CompleteTask.find({});
    return res.render('completed', {
        tasks: Ctasks,
    });
}

