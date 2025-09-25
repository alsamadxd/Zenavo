import mongoose from 'mongoose'
const ProgramSchema=new mongoose.Schema({
    workout:String,
    week:String,
    exerciseNameDesc:[{
        exName:String,
        exDesc:String,
    }
]
    // exImage:Image,
    
})
export const Program= mongoose.model("Program",ProgramSchema)