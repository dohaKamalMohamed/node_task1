
 module.exports=function(app){
     app.use((req,res,next)=>{
         next(createError(404));
     });

     app.use((err,req,res,next)=>{
         console.error(err.message);
        return res.status(500).json(err.message);
     })
 }     