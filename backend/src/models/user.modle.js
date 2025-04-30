import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userName :{
        type : String ,
        required : true
    },
    url :{
        type : String,
        required : true 
    },
    password : {
        type : String,
        required : true
    },
    userId :{
        type : String ,
        requird : true 
    }
})

export const User = mongoose.model("User", userSchema)