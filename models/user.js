import {model, models,Schema } from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: [true, 'Username is already in use!'],
      },
    email : {
        type :  String, 
        required :[ true, "Email is required"],
        unique : [  true, "Email is already in use"],
        trim : true,
        lowercase : true,    
    },
    image:{
        type : String,
    }


})

export default models.User || model("User", userSchema);