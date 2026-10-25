import mongoose from "mongoose";
const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username required"],
        unique:[true,"username must be unique"],
    },
    email:{
         type:String,
        required:[true,"email required"],
        unique:[true,"email must be unique"],
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
})

const userModel =mongoose.model("users",userSchema)

export default userModel