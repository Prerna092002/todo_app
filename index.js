const express=require('express');
const app=express();
const port=5000;
app.set('view engine', 'ejs');
app.set('views', './views');


// requiring the connection between mongoose and mongodb
const db = require('./config/mongoose');
app.use(express.urlencoded());
// to use static files
app.use(express.static('./assets'));
// ṣending all the request to the home router
app.use('/', require('./routes'));


// app.get('/',function(req,res){
//     res.send("Hello");
// })
app.listen(port, function (err) {
    if (err) {
        console.log("error in running the server", err);
    }
    console.log(`server is up and running on port ${port}`);
});