import { Student } from "../models/studentModel.js"

export const getAllStudents = async(req,res,next)=>{
    try{
        const students = await Student.find({Mode:"online"});
        res.status(200).json({
            success:true,
            message:students
        })
    }catch(e){
        res.status(400).json({
            success:false,
            message:e
        })
    }
};

export const addStudent =async(req,res)=>{
    try{
        const student  = new Student(req.body);
        await student.save();
        console.log(req.body);
        res.status(200).json({
            success:true,
            message:"Student created successfully"
        })
    }catch(e){
        res.status(400).json({
            success:false,
            message:e
        })
    }
}