import mongoose from "mongoose";

const UserModelSchema=new mongoose.Schema({

    Auth0Id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    name:{
        type:String,
    },
    address:{
        type:String,
    },
    country:{
        type:String,
    },
    city:{
        type:String,
    },
    phone:{
        type:String,
    }


},{
    timestamps:true,
    versionKey:false
})
const UserModel=mongoose.model("users",UserModelSchema)
export default UserModel