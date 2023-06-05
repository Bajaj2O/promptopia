import {model, models,Schema,Document } from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },
    email : {
        type :  String, 
        required :[ true, "Email is required"],
        unique : [  true, "Email is already in use"],
        trim : true,
        lowercase : true,    
    },


})

export default models.User || model("User", userSchema);