import mongoose from 'mongoose'
const UserDataSchema=new mongoose.Schema({
    userId:String,
    date:Date,
    workout:String,
    exName:String,
    selectedReps:[String],
    selectedWeight:[String]

})
export const UserData=mongoose.model("UserData",UserDataSchema)