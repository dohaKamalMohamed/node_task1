const mongoose= require('mongoose');


module.exports=function(){
    mongoose.connect('mongodb://localhost/Students',{useNewUrlParser:true,useCreateIndex: true,})
    .then(()=>console.log("connection with database succeed"))
    .catch((err)=>(`connecting to database failed => ${err}`));
};