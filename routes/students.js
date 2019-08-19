const router=require('express').Router();
const {Student} =require('../model/student');
const _ =require('lodash');


router.get('/',async (req,res)=>{
 try{
    let students = await Student.find();
    res.json(students);
 }catch(err) {
    next(err);
 }
});


router.get('/:id',async (req,res)=>{
    try{
        let student = await Student.findOne({_id:req.params.id});
        if(!student) return res.json({status:false,message:'This student is not found'});
        res.json(student);
     }catch(err) {
        next(err);
     }
});

router.post('/',async (req,res,next)=>{
    try{
        
    let  student =new Student(_.pick(req.body,[
            'student_name',
            'student_email',
            'student_subject',
            'student_section',
            'student_gender',
            'dob'
        ]));
        await student.save();
      return res.json(student);
     }catch(err) {
         next(err);
     }
});
router.put('/:id',async (req,res,next)=>{
    try{
     let student =await Student.findOneAndUpdate({_id:req.params.id},_.pick(req.body,[
            'student_name',
            'student_email',
            'student_subject',
            'student_section',
            'student_gender',
            'dob'
        ]),{ runValidators: true, context: 'query' });
        if(!student) return res.json({status:false,message:'This student is not exist'});
      return res.json(student);
     }catch(err) {
        next(err);
     }
});


router.delete('/:id',async (req,res)=>{
 try{
    let student=await Student.findOneAndRemove({_id:req.params.id});
    if(!student) return res.json({status:false,message:'This student is not exist'});
    res.json('deleted succefully');
 }catch(err){
    next(err);
 }
})


module.exports=router;
      