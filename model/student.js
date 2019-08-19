const mongoose=require('mongoose');
      joi=require('joi');
      validator=require('validator');
       uniqueValidator = require('mongoose-unique-validator');

const studentSchema = new mongoose.Schema({
    student_name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:223,
    },
    student_email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minlength:3,
        maxlength:223,
        validate:{
            validator:student_email =>validator.isEmail(student_email),
            message:'you should enter valid email'
        },
    },
    student_subject:{
        type:String,
        required:true,
        trim:true,
        default:'node js',
    },
    student_section:{
        type:String,
        required:true,
        trim:true,
        enum:['A','B','C','D','E']
    },
    student_gender:{
        type:String,
        required:true,
        trim:true,
        enum:['male','female']
    },
    dob:{
        type:Date,
        default:Date.now(),
    }

});
studentSchema.plugin(uniqueValidator,{ message: 'Email should be unique' });

const Student = mongoose.model('Student',studentSchema);


module.exports.Student=Student;
