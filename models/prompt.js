import {model, models,Schema } from "mongoose";


const promptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    prompt :{
        type :  String, 
        required :[ true, "Prompt is required"],
        
    },
    tag: {
        type : String,
        required :[ true, "Provide a tag"],
    }


})

export default models.Prompt || model("Prompt", promptSchema);