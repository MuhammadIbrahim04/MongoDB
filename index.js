const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');

const router = require('./routes/user')

mongoose.connect('mongodb+srv://mibrahimzero4:shah04@ibm.1rfdbbu.mongodb.net/').then(()=>{
    console.log('Mongoose Connected');

}).catch((err)=>console.log(err));


app.use('/user', router)

app.get("/",(req, res)=>{
res.send("IBM World")
});


app.listen(port,()=>{

console.log("start server");


});

